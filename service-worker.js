const cacheName = 'portfolio-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/images/photo1.jpeg'
];

// Install
self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

// Fetch
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});

// Push Notification
self.addEventListener('push', e => {
  const data = e.data ? e.data.text() : "New Notification from Portfolio!";
  const options = {
    body: data,
    icon: 'images/photo1.jpeg',
    badge: 'images/photo1.jpeg'
  };
  e.waitUntil(self.registration.showNotification("Portfolio PWA", options));
});

// Notification click
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});
