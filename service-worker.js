const CACHE="enfoca-v3";
const FILES=["./","./index.html","./style.css","./data.js","./app.js","./manifest.webmanifest","./icon-192.png","./icon-512.png"];
// Busca primeiro na internet; usa a cópia salva quando estiver sem conexão.
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:"reload"})))))});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin)return;e.respondWith(fetch(e.request,{cache:"no-cache"}).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return res}).catch(()=>caches.match(e.request).then(c=>c||caches.match("./index.html"))))});
