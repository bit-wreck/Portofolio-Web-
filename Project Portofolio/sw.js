
const Name = "Portofolio"
var Urls =[
    "/",
    "index.html",
    "js/bootstrap.min.js",
    "js/jquery.min.js",
    "js/popper.min.js",
    "js/mdb.min.js",
    "css/bootstrap.css",
    "css/mdb.min.css",
    "img/folder.ico",
    

]
self.addEventListener("install", function(event) {
    event.waitUntil(
      caches.open(Name).then(function(cache) {
        return cache.addAll(Urls);
      })
    );
  });
self.addEventListener("fetch", function(event) {
    event.respondWith(
      caches
        .match(event.request, { cacheName: Name })
        .then(function(response) {
          if (response) {
            console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
            return response;
          }
   
          console.log(
            "ServiceWorker: Memuat aset dari server: ",
            event.request.url
          );
          return fetch(event.request);
        })
    );
  });
