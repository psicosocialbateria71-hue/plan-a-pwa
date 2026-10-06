const CACHE = 'plan-a-v7';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Solo cachear GET — nunca POST (Firebase usa POST)
self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  // No cachear peticiones de Firebase
  if(e.request.url.includes('firestore.googleapis.com')) return;
  if(e.request.url.includes('firebase')) return;
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
