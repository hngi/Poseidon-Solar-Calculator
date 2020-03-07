const staticSolar = "staticSolar-v1"

const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/js/contact.js",
    "/js/faq.js",
    "/js/solar.js",
    "/js/webshare.js",
    "/images/accounting.png",
    "/images/battery.jpg",
    "/images/clipboard.png",
    "/images/partners-image.png",
    "/images/solar2.jpg",
    "/images/coffee6.jpg",
    "/images/solar3.jpg",
    "/images/washing-machine.png",
    "/images/Logo/Frame modified.png",
    "/images/Logo/Frame.png",
    "/images/icons/solar128x128.png",
    "/images/icons/solar192x192.png",
    "/images/icons/solar256x256.png",
    "/images/icons/solar512x512.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticSolar).then(cache => {
            cache.addAll(assets)
        })
    )
});

self.addEventListener("activate", activateEvent => {
    activateEvent.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== staticSolar) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
});