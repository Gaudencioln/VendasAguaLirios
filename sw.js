
const VERSION='v2.0.0';
const CACHE_NAME=`agua-lirios-${VERSION}`;
const APP_SHELL=['./','./index.html','./manifest.json','./agua-lirios-azul.png','./agua-lirios-azul-Copia.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null))));self.clients.claim();});
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.mode==='navigate'||(r.method==='GET'&&r.headers.get('accept')?.includes('text/html'))){
    e.respondWith(fetch(r).then(res=>{const copy=res.clone();caches.open(CACHE_NAME).then(c=>c.put(r,copy));return res;})
      .catch(()=>caches.match(r).then(rr=>rr||caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(r).then(cr=>cr||fetch(r)));
});
