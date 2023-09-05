// const OFFLINE_VERSION = 1;
const CACHE_VERSION = 1;
// const CACHE_NAME = "offline";
const CACHE_NAME = "assets";
// const OFFLINE_URL = "offline.html";
const assets = [
    '/',
    '/icon',
    '/icon/home.svg',
    '/icon/next.svg',
    '/icon/back.svg',
    '/icon/book_icon.svg',
    '/icon/buku.svg',
    '/icon/capacitor.svg',
    '/icon/close.svg',
    '/icon/logo_capacitor_icon.svg',
    '/icon/man.svg',
    '/icon/mulai.svg',
    '/icon/pm.svg',
    '/icon/quiz.svg',
    '/icon/quiz1.svg',
    '/icon/rangkaian.svg',
    '/icon/read_book_icon.svg',
    '/icon/resistor_icon.svg',
    '/icon/science1.svg',
    '/icon/simul.svg',
    '/icon/simulasi1.svg',
    '/icon/undraw_electricity_k2ft.svg',
    '/foto',
    '/foto/logouin.png',
    '/foto/pengembang.jpeg',
    '/foto/pengembang.png',
    '/foto/rangkaian1.png',
    '/foto/rangkaian2.png',
    '/foto/rangkaian3.png',
    '/foto/rangkaian4.png',
    '/coba143.html',
    '/manifest.json'
];


self.addEventListener("install", function(event){
    event.waitUntil((async function(){
        const cache = await caches.open(CACHE_NAME);
        // await cache.add(new Request(OFFLINE_URL,{
        //     chace: "reload"
        // }));
        await cache.addAll(assets);
    })())
    self.skipWaiting();
})

self.addEventListener("active", function(event){
    console.info("[sw] Active!")
    event.waitUntil((async function(){
        if ("navigationPreload" in self.registration){
            await self.registration.navigationPrelod.enable();
        }
    })());
    self.clients.claim()
})

// 

self.addEventListener('fetch', function(event){
  // menggunakan promise
  // event.respondWith(caches.match(event.request).then(function(res){
  //   return res || fetch(event.request);
  // }));

  // menggunakan async
  event.respondWith((async function(){
    const res = await caches.match(event.request);
    return res ||  fetch(event.request) ;
  })());
})