// Kubo Delivery - Service Worker for PWA Installation & Push Notifications
const CACHE_NAME = 'kubo-pwa-cache-v2';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.png',
  '/icons/Icon-192.png',
  '/icons/Icon-512.png'
];

// Supabase Configuration for Autonomous Background Order Tracking
const SUPABASE_URL = 'https://bzenvnknmslmeuciimpb.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_8-zLx-xqvWWFltMAIteLEw_yq9jAwH8';

// Tracked orders in memory: orderId -> { businessName, lastStatus, lastPaymentStatus, lastDriverName, isPickup, pickupCode }
let trackedOrders = {};
let bgPollingTimer = null;

// 1. Install Event - Cache essential shell files
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('Non-critical cache addAll note:', err);
      });
    })
  );
});

// 2. Activate Event - Claim clients immediately and cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Helper to guarantee absolute URLs for notification icons (required by Android Chrome)
function getAbsoluteUrl(path) {
  try {
    return new URL(path || '/icons/Icon-192.png', self.location.origin).href;
  } catch (e) {
    return path;
  }
}

// 3. Fetch Event - Cache-first for compiled static assets, network-first with cache fallback for others
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  if (url.includes('supabase.co') || url.includes('openstreetmap.org') || url.includes('yappy.cloud') || event.request.method !== 'GET') {
    return;
  }

  // Fast cache-first for static immutable assets (Flutter JS, WASM, fonts, images)
  const isStaticAsset = /\.(wasm|js|png|jpg|jpeg|svg|webp|woff2|otf|ttf)$/.test(url) &&
                        !url.includes('sw.js') &&
                        !url.includes('flutter_service_worker.js');

  if (isStaticAsset) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return response;
        });
      })
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200 && event.request.mode === 'navigate') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
      })
  );
});

// 4. Helper to format rich notifications for all order states
function formatOrderStatusNotification(order, oldInfo) {
  const status = (order.status || '').toLowerCase().trim();
  const paymentStatus = (order.payment_status || '').toLowerCase().trim();
  const driverName = (order.driver_name || order.repartidor || '').trim();
  const bizName = (order.businesses && order.businesses.name) ? order.businesses.name : (oldInfo.businessName || 'Kubo Delivery');
  const isPickup = order.delivery_type === 'pickup' || oldInfo.isPickup === true;
  const pickupCode = order.pickup_code || oldInfo.pickupCode || '';

  // 1. Check status change
  if (oldInfo.lastStatus && oldInfo.lastStatus !== status) {
    switch (status) {
      case 'accepted':
      case 'aceptado':
        return {
          title: '✅ ¡Pedido aceptado!',
          body: `${bizName} confirmó tu pedido y comenzará a prepararlo.`,
          tag: `order-${order.id}-accepted`
        };
      case 'preparing':
      case 'preparando':
      case 'en_preparacion':
        return {
          title: '🍳 ¡En preparación!',
          body: `${bizName} está preparando tu orden en este momento.`,
          tag: `order-${order.id}-preparing`
        };
      case 'ready_for_pickup':
      case 'listo_para_retiro':
        return {
          title: '🛍️ ¡Listo para retirar!',
          body: pickupCode ? `Tu pedido está listo en ${bizName}. Retíralo con tu PIN: ${pickupCode}.` : `Tu pedido está listo para ser retirado en ${bizName}.`,
          tag: `order-${order.id}-ready-pickup`
        };
      case 'ready':
      case 'listo':
        if (isPickup) {
          return {
            title: '🛍️ ¡Listo para retirar!',
            body: pickupCode ? `Tu pedido está listo en ${bizName}. Retíralo con tu PIN: ${pickupCode}.` : `Tu pedido está listo para ser retirado en ${bizName}.`,
            tag: `order-${order.id}-ready-pickup`
          };
        }
        return {
          title: '📦 ¡Pedido empacado y listo!',
          body: `Tu pedido de ${bizName} está listo esperando al repartidor.`,
          tag: `order-${order.id}-ready`
        };
      case 'delivering':
      case 'on_the_way':
      case 'en_camino':
      case 'en_reparto':
        return {
          title: '🛵 ¡Tu pedido va en camino!',
          body: driverName ? `El repartidor ${driverName} va en camino con tu pedido.` : `Tu pedido de ${bizName} va en camino a tu dirección.`,
          tag: `order-${order.id}-delivering`
        };
      case 'delivered':
      case 'entregado':
        return {
          title: '🎉 ¡Pedido entregado!',
          body: `Tu pedido de ${bizName} fue entregado exitosamente. ¡Buen provecho!`,
          tag: `order-${order.id}-delivered`
        };
      case 'cancelled':
      case 'cancelado':
        return {
          title: '❌ Pedido cancelado',
          body: `Tu pedido de ${bizName} ha sido cancelado.`,
          tag: `order-${order.id}-cancelled`
        };
      default:
        return {
          title: '📍 Actualización de pedido',
          body: `El estado de tu pedido en ${bizName} cambió a ${status}.`,
          tag: `order-${order.id}-${status}`
        };
    }
  }

  // 2. Check driver assignment
  if (driverName && driverName !== oldInfo.lastDriverName && !oldInfo.lastDriverName) {
    return {
      title: '👤 Repartidor Asignado',
      body: `${driverName} llevará tu pedido de ${bizName}.`,
      tag: `order-${order.id}-driver`
    };
  }

  // 3. Check payment status change
  if (oldInfo.lastPaymentStatus && oldInfo.lastPaymentStatus !== paymentStatus) {
    if (paymentStatus === 'pago_confirmado' || paymentStatus === 'paid' || paymentStatus === 'pagado') {
      return {
        title: '💰 ¡Pago confirmado por el comercio!',
        body: `${bizName} ha verificado y aprobado tu comprobante de pago.`,
        tag: `order-${order.id}-payment-confirmed`
      };
    } else if (paymentStatus === 'pago_rechazado' || paymentStatus === 'rejected') {
      return {
        title: '⚠️ Pago no verificado',
        body: `${bizName} no pudo validar tu comprobante de pago. Toca para comunicarte por WhatsApp.`,
        tag: `order-${order.id}-payment-rejected`
      };
    }
  }

  return null;
}

// 5. Autonomous Background Polling to fetch orders from Supabase REST API
async function checkBackgroundOrders() {
  const orderIds = Object.keys(trackedOrders);
  if (orderIds.length === 0) {
    if (bgPollingTimer) {
      clearInterval(bgPollingTimer);
      bgPollingTimer = null;
    }
    return;
  }

  try {
    const url = `${SUPABASE_URL}/rest/v1/orders?id=in.(${orderIds.join(',')})&select=id,status,payment_status,driver_name,repartidor,delivery_type,pickup_code,businesses(name)`;
    const res = await fetch(url, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });

    if (!res.ok) return;
    const orders = await res.json();

    for (const order of orders) {
      const oldInfo = trackedOrders[order.id];
      if (!oldInfo) continue;

      const notif = formatOrderStatusNotification(order, oldInfo);
      const newStatus = (order.status || '').toLowerCase().trim();
      const newPayment = (order.payment_status || '').toLowerCase().trim();
      const newDriver = (order.driver_name || order.repartidor || '').trim();

      // Update in-memory state
      trackedOrders[order.id].lastStatus = newStatus;
      trackedOrders[order.id].lastPaymentStatus = newPayment;
      trackedOrders[order.id].lastDriverName = newDriver;
      if (order.pickup_code) trackedOrders[order.id].pickupCode = order.pickup_code;
      if (order.businesses && order.businesses.name) trackedOrders[order.id].businessName = order.businesses.name;

      if (notif) {
        const fullIcon = getAbsoluteUrl('/icons/Icon-192.png');
        const fullBadge = getAbsoluteUrl('/icons/Icon-192.png');
        await self.registration.showNotification(notif.title, {
          body: notif.body,
          icon: fullIcon,
          badge: fullBadge,
          tag: notif.tag,
          renotify: true,
          requireInteraction: true, // Keep notification active on lock screen until user interacts
          silent: false,
          vibrate: [300, 150, 300, 150, 300], // Strong vibration for lock screen
          data: { url: `/#/tracking?order_id=${order.id}` }
        });
      }

      // If order is completed or cancelled, stop tracking after notifying
      if (newStatus === 'delivered' || newStatus === 'cancelled') {
        delete trackedOrders[order.id];
      }
    }
  } catch (err) {
    console.warn('Background check orders note:', err);
  }
}

function startBackgroundOrderPolling() {
  if (!bgPollingTimer) {
    bgPollingTimer = setInterval(checkBackgroundOrders, 10000);
  }
}

// 6. Web Push Event - Shows notifications even when the web page is closed
self.addEventListener('push', (event) => {
  let data = {
    title: 'Kubo Delivery',
    body: '¡Hay una actualización en tu pedido!',
    icon: '/icons/Icon-192.png',
    badge: '/icons/Icon-192.png',
    data: { url: '/' }
  };

  if (event.data) {
    try {
      const parsed = event.data.json();
      data = Object.assign(data, parsed);
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: getAbsoluteUrl(data.icon || '/icons/Icon-192.png'),
    badge: getAbsoluteUrl(data.badge || '/icons/Icon-192.png'),
    tag: data.tag || `kubo-order-${Date.now()}`,
    renotify: true,
    requireInteraction: true,
    silent: false,
    vibrate: [300, 150, 300, 150, 300],
    data: data.data || { url: '/' }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// 7. Notification Click Event - Opens app or focuses existing tab
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) ? event.notification.data.url : '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          if ('navigate' in client && targetUrl !== '/') {
            client.navigate(targetUrl);
          }
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});

// 8. Message Event - Receives notifications and order tracking requests from Flutter
self.addEventListener('message', (event) => {
  if (!event.data) return;

  if (event.data.type === 'SHOW_NOTIFICATION') {
    const info = event.data;
    const options = {
      body: info.body || '',
      icon: getAbsoluteUrl(info.icon || '/icons/Icon-192.png'),
      badge: getAbsoluteUrl(info.badge || '/icons/Icon-192.png'),
      tag: info.tag || `kubo-order-${Date.now()}`,
      vibrate: [300, 150, 300, 150, 300],
      renotify: true,
      requireInteraction: true,
      silent: false,
      data: info.data || { url: '/' }
    };
    self.registration.showNotification(info.title || 'Kubo Delivery', options);
  } else if (event.data.type === 'TRACK_ORDER') {
    const { orderId, businessName, initialStatus, paymentStatus, driverName, isPickup, pickupCode } = event.data;
    if (orderId) {
      trackedOrders[orderId] = {
        businessName: businessName || 'Kubo Delivery',
        lastStatus: (initialStatus || '').toLowerCase().trim(),
        lastPaymentStatus: (paymentStatus || '').toLowerCase().trim(),
        lastDriverName: (driverName || '').trim(),
        isPickup: isPickup === true,
        pickupCode: pickupCode || ''
      };
      startBackgroundOrderPolling();
      // Run immediate check
      checkBackgroundOrders();
    }
  } else if (event.data.type === 'STOP_TRACK_ORDER') {
    if (event.data.orderId) {
      delete trackedOrders[event.data.orderId];
    }
  }
});
