// OneSignal Web Push Worker
importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

// PWA Installability criteria: handle fetch events so browser recognizes valid PWA service worker
self.addEventListener('fetch', (event) => {
  // Pass-through to network for normal requests
});

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
