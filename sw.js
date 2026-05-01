const CACHE = 'pratica-viva-v13k';

const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app-v13j.js?v=13k',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './assets/audio/campana-profonda.wav',
  './assets/audio/campana-tempio.wav',
  './assets/audio/campana-luminosa.wav',
  './assets/audio/campana-morbida.wav',
  './assets/audio/daimoku.mp3',
  './assets/audio/gongyo.mp3',
  './assets/gongyo/c2-1.png',
  './assets/gongyo/c2-2.png',
  './assets/gongyo/c2-3.png',
  './assets/gongyo/c2-4.png',
  './assets/gongyo/c2-5.png',
  './assets/gongyo/c16-01.png',
  './assets/gongyo/c16-02.png',
  './assets/gongyo/c16-03.png',
  './assets/gongyo/c16-04.png',
  './assets/gongyo/c16-05.png',
  './assets/gongyo/c16-06.png',
  './assets/gongyo/c16-07.png',
  './assets/gongyo/c16-08.png',
  './assets/gongyo/c16-09.png',
  './assets/gongyo/c16-10.png',
  './assets/gongyo/c16-11.png',
  './assets/gongyo/c16-12.png',
  './assets/gongyo/trad/trad2-1.png',
  './assets/gongyo/trad/trad2-2.png',
  './assets/gongyo/trad/trad2-3.png',
  './assets/gongyo/trad/trad16-1.png',
  './assets/gongyo/trad/trad16-2.png',
  './assets/gongyo/trad/trad16-3.png',
  './assets/gongyo/trad/trad16-4.png',
  './assets/gongyo/trad/trad16-5.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    for (const asset of ASSETS) {
      try { await cache.add(asset); } catch (e) {}
    }
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isHTML = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');

  if (isHTML) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req, { cache: 'no-store' });
        const cache = await caches.open(CACHE);
        cache.put('./index.html', fresh.clone()).catch(() => {});
        return fresh;
      } catch (e) {
        return (await caches.match('./index.html')) || Response.error();
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;

    try {
      const fresh = await fetch(req);
      const cache = await caches.open(CACHE);

      if (fresh && fresh.status === 200 && url.origin === self.location.origin) {
        cache.put(req, fresh.clone()).catch(() => {});
      }

      return fresh;
    } catch (e) {
      return cached || Response.error();
    }
  })());
});
