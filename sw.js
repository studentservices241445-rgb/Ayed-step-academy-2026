// sw.js
const CACHE = "ayed-step-2026-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./content.html",
  "./level-test.html",
  "./payment.html",
  "./register.html",
  "./requests.html",
  "./policies.html",
  "./css/style.css",
  "./js/config.js",
  "./js/main.js",
  "./js/assistant.js",
  "./js/notifications.js",
  "./js/questions.js",
  "./js/quiz.js",
  "./js/register.js",
  "./js/requests.js",
  "./assets/manifest.webmanifest",
  "./assets/icon-192.svg",
  "./assets/icon-512.svg"
];

self.addEventListener("install", (e)=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});

self.addEventListener("activate", (e)=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE ? caches.delete(k):null)))
  );
});

self.addEventListener("fetch", (e)=>{
  e.respondWith(
    caches.match(e.request).then(r=> r || fetch(e.request).then(res=>{
      const copy = res.clone();
      caches.open(CACHE).then(c=>c.put(e.request, copy)).catch(()=>{});
      return res;
    }).catch(()=>caches.match("./index.html")))
  );
});
