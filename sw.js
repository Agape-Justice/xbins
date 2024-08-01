const cacheName = 'BinaceCache';
const cacheFile = [
'index.html',
'main.js',
'offline.html',
'manifest.json',
'sw.js',
'images/logo192.png',
'images/logo144.png',
'images/back.png',
'images/bnb.png',
'images/file.png',
'images/input.png',
'images/low.png',
'images/load.png',
'images/right.png',
'images/menu.png',
'images/eye.png',
'images/euro.png',
'images/btc.png',
'images/warn.png',
'images/sideIcon.png',
];

// Install service worker
self.addEventListener('install', event => {
event.waitUntil(
caches.open(cacheName)
.then(cache => {
return cache.addAll(cacheFile);
})
);
});

// Fetch event handler
self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request)
.then(response => {
return response || fetch(event.request);
})
.catch(() => {
return caches.match('offline.html'); // Return cached offline page
})
);
});

// Activate event handler
self.addEventListener('activate', event => {
event.waitUntil(
caches.keys().then(cacheKeys => {
return Promise.all(
cacheKeys.map(cacheKey => {
if (cacheKey !== cacheName) {
return caches.delete(cacheName);
}
})
);
})
);
});
