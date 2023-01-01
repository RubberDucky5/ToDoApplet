let assets = [
    "/",
    "/index.html",
    "/app.js",
    "/resource/style.css",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open('static-templatepwa').then(cache => {
        cache.addAll(assets)
      })
    )
  })