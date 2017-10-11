const version = '0.6.3';

self.addEventListener('install', e => {
    console.log('install');
    const timeStamp = Date.now();
    e.waitUntil(
        caches.open('airhorner').then(cache => {
            return cache.addAll([
                `pwa-todo-list/`,
                `pwa-todo-list/index.html?timestamp=${timeStamp}`,
                `pwa-todo-list/src/js/bundle.js?timestamp=${timeStamp}`,
            ])
                        .then(() => self.skipWaiting());
        })
    )
});

self.addEventListener('activate',  event => {
    console.log('activate');
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    console.log('fetch');
    event.respondWith(
        caches.match(event.request, {ignoreSearch:true}).then(response => {
            return response || fetch(event.request);
        })
    );
});
