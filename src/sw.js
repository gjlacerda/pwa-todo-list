const version = '0.6.4';

self.addEventListener('install', e => {
    console.log('install');
    const timeStamp = Date.now();
    e.waitUntil(
        caches
            .open('todoList')
            .then(cache => {
                return cache.addAll([
                    `/`,
                    `index.html?timestamp=${timeStamp}`,
                    `src/js/bundle.js?timestamp=${timeStamp}`,
                ])
                .then(() => self.skipWaiting());
            })
    )
});

self.addEventListener('activate',  event => {
    console.log('activate');
    event
        .waitUntil(self.clients
        .claim());
});

self.addEventListener('fetch', event => {
    console.log('fetch');
    event
        .respondWith(
        caches.match(event.request, {ignoreSearch:true})
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
