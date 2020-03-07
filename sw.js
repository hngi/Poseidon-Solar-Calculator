const staticSolar = "staticSolar-v1"

const assets = [
    "/",
    "index.html",
    "css/style.css",
    "js/app.js",
    "js/contact.js",
    "js/faq.js",
    "js/solar.js",
    "js/webshare.js",
    "Images/accounting.png",
    "Images/battery.jpg",
    "Images/clipboard.png",
    "Images/partners-image.png",
    "Images/solar2.jpg",
    "Images/coffee6.jpg",
    "Images/solar3.jpg",
    "Images/washing-machine.png",
    "Images/Logo/Frame modified.png",
    "Images/Logo/Frame.png",
    "Images/icons/solar128x128.png",
    "Images/icons/solar192x192.png",
    "Images/icons/solar256x256.png",
    "Images/icons/solar512x512.png",
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