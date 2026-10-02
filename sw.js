// Простой Service Worker для PWA
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Просто пропускаем запросы — SW нужен только для установки PWA
  e.respondWith(fetch(e.request).catch(() => new Response('Offline', { status: 503 })));
});
