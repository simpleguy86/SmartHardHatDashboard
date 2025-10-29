self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("shh-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./SHHDashboard2_FIXED.html",
        "./manifest.json",
        "./icon-192.png",
        "./icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
