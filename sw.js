const CACHE_NAME = 'pwa-task-list-v1';
const urlsToCache = [
    '/agenda/',
    '/agenda/index.html',
    '/agenda/style.css',
    '/agenda/manifest.json',
    '/agenda/icons/icon-192x192.png',
    '/agenda/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

