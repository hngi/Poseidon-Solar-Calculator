const staticSolar = "staticSolar-v1"

const assets = [
    "index.html",
    "src/css/style.css",
    "src/js/app.js",
    "src/js/contact.js",
    "src/js/faq.js",
    "src/js/solar.js",
    "src/js/webshare.js",
    "Images/accounting.png",
    "Images/battery.jpg",
    "Images/clipboard.png",
    "Images/patners-image.png",
    "Images/patners.png",
    "Images/solar2.jpg",
    "Images/solar3.jpg",
    "Images/washing-machine.png",
    "Images/Logo/Framemodified.png",
    "Images/Logo/Frame.png",
    "Images/icons/solar128x128.png",
    "Images/icons/solar192x192.png",
    "Images/icons/solar256x256.png",
    "Images/icons/solar512x512.png",
]

self.addEventListener("install", installEvent => {
    self.skipWaiting();

    installEvent.waitUntil(
        caches.open(staticSolar).then(cache => {
            console.log("done")
            return cache.addAll(assets)
        }).catch((err) => {
            console.log("err", err)
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