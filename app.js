const CACHE_NAME = 'work-reports-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  // Přidejte cesty k ikonám
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png',
  '/icons/favicon.ico',
  // Font Awesome - pokud používáte CDN, bude cachováno dynamicky
   'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
   'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-solid-900.woff2' // Příklad webfontu
];

// Instalace Service Workeru a cachování statických souborů
self.addEventListener('install', event => {
  console.log('Service Worker: Instalace');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Otevřena cache, cachují se soubory:', urlsToCache);
         // Používáme addAll, ale pokud některý soubor selže, celé cachování selže.
         // Pro robustnější řešení by se cachovalo individuálně.
         return cache.addAll(urlsToCache).catch(error => {
            console.error('Service Worker: Selhalo cachování některých souborů při instalaci:', error);
            // Můžeme se rozhodnout, zda pokračovat i přes chybu, nebo ne.
            // Např. FontAwesome nemusí být kritický pro základní offline funkci.
         });
      })
      .then(() => {
         console.log('Service Worker: Všechny základní soubory úspěšně nacachovány.');
         // Přeskočení čekání aktivuje SW ihned po instalaci
         return self.skipWaiting();
      })
      .catch(err => {
         console.error('Service Worker: Chyba při otevírání cache nebo cachování souborů:', err);
      })
  );
});

// Aktivace Service Workeru a správa starých cachí
self.addEventListener('activate', event => {
  console.log('Service Worker: Aktivace');
  const cacheWhitelist = [CACHE_NAME]; // Ponechat pouze aktuální cache
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Mazání staré cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
       console.log('Service Worker: Aktivován a připraven ovládat stránky.');
       // Ihned převezme kontrolu nad stránkami
       return self.clients.claim();
    })
  );
});

// Zachytávání síťových požadavků (Fetch) - strategie Cache First (pak Network)
self.addEventListener('fetch', event => {
   // Ignorujeme požadavky, které nejsou GET (např. POST)
   if (event.request.method !== 'GET') {
      // console.log('Service Worker: Ignoruji non-GET požadavek:', event.request.url);
      return;
   }

   // Pro FontAwesome CDN používáme spíše Cache falling back to Network
   if (event.request.url.startsWith('https://cdnjs.cloudflare.com')) {
       event.respondWith(
           caches.match(event.request)
               .then(response => {
                   // Pokud je v cache, vrátíme ji
                   if (response) {
                       // console.log('Service Worker: Vracím z cache (CDN):', event.request.url);
                       return response;
                   }
                   // Pokud není v cache, stáhneme ze sítě, uložíme do cache a vrátíme
                   // console.log('Service Worker: Stahuji ze sítě a cachuji (CDN):', event.request.url);
                   return fetch(event.request).then(networkResponse => {
                       // Otevřeme cache a uložíme kopii odpovědi
                       return caches.open(CACHE_NAME).then(cache => {
                           cache.put(event.request, networkResponse.clone());
                           return networkResponse; // Vrátíme originální odpověď prohlížeči
                       });
                   }).catch(error => {
                       console.error('Service Worker: Chyba při stahování CDN zdroje:', event.request.url, error);
                       // Můžeme vrátit fallback odpověď, pokud je potřeba
                   });
               })
       );
       return; // Ukončíme zpracování pro CDN zde
   }


  // Pro ostatní lokální zdroje použijeme Cache First
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Pokud je požadavek nalezen v cache, vrátíme ho
        if (response) {
          // console.log('Service Worker: Vracím z cache:', event.request.url);
          return response;
        }

        // Pokud není v cache, pokusíme se ho stáhnout ze sítě
        // console.log('Service Worker: Stahuji ze sítě:', event.request.url);
        return fetch(event.request).then(
          networkResponse => {
            // Pokud se podařilo stáhnout, uložíme kopii do cache pro příště
            // Je důležité klonovat odpověď, protože ji lze přečíst pouze jednou
            if (networkResponse && networkResponse.status === 200) {
                // console.log('Service Worker: Úspěšně staženo, cachuji:', event.request.url);
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME)
                  .then(cache => {
                    cache.put(event.request, responseToCache);
                  });
            } else {
               console.warn('Service Worker: Neúspěšná odpověď ze sítě, necachuji:', event.request.url, networkResponse.status);
            }
            return networkResponse; // Vrátíme původní síťovou odpověď
          }
        ).catch(error => {
           console.error('Service Worker: Chyba při stahování, síť není dostupná?', event.request.url, error);
           // Zde by se mohla vrátit fallback stránka/odpověď pro offline režim,
           // pokud by základní cachované soubory nestačily.
           // Např. return caches.match('/offline.html');
        });
      })
  );
});