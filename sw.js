// Kubo Delivery - Service Worker for PWA Installation & Push Notifications
const CACHE_NAME = 'kubo-pwa-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.png',
  '/icons/Icon-192.png',
  '/icons/Icon-512.png'
];

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

// 3. Fetch Event - Network-first strategy with cache fallback
self.addEventListener('fetch', (event) => {
  // Let Supabase API and external network calls pass through directly
  const url = event.request.url;
  if (url.includes('supabase.co') || url.includes('openstreetmap.org') || url.includes('yappy.cloud') || event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Return fresh response
        return response;
      })
      .catch(() => {
        // Fallback to cache if network fails (offline support)
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
      })
  );
});

// 4. Web Push Event - Shows notifications even when the web page is closed
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
    icon: data.icon || '/icons/Icon-192.png',
    badge: data.badge || '/icons/Icon-192.png',
    tag: data.tag || 'kubo-order-alert',
    renotify: true,
    vibrate: [200, 100, 200],
    data: data.data || { url: '/' }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// 5. Notification Click Event - Opens app or focuses existing tab
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

// 6. Message Event - Allows Flutter app to request notifications directly via Service Worker
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const info = event.data;
    const options = {
      body: info.body || '',
      icon: info.icon || '/icons/Icon-192.png',
      badge: '/icons/Icon-192.png',
      tag: info.tag || 'kubo-order-msg',
      vibrate: [200, 100, 200],
      renotify: true,
      data: info.data || { url: '/' }
    };
    self.registration.showNotification(info.title || 'Kubo Delivery', options);
  }
});
