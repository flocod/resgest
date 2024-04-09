/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v12';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  "%PUBLIC_URL%/index.html",
];




// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});



self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.method === 'GET' && event.request.url.startsWith(self.location.origin)) {
    // Vérifier si la requête est une image (par exemple, avec l'extension .jpg, .png, .gif, etc.).
    if (event.request.url.match(/\.(jpg|jpeg|png|gif|bmp|webp|svg|ico)$/)) {
      event.respondWith(
        caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return caches.open(RUNTIME).then(cache => {
            return fetch(event.request).then(response => {
              // Mettre en cache la réponse seulement si c'est une image.
              if (response.status === 200) {
                cache.put(event.request, response.clone());
              }
              return response;
            });
          });
        })
      );
    }
  }
});





// Fonction pour partager sur les réseaux sociaux
function partagerSurReseauxSociaux(url, titre, description) {
  let textePartage = encodeURIComponent(titre + " - " + description);

  let whatsappURL =
    "https://api.whatsapp.com/send?text=" +
    textePartage +
    " " +
    encodeURIComponent(url);
  clients.openWindow(whatsappURL)
}

// Gestion de la notification lorsque l'utilisateur clique dessus
self.addEventListener("notificationclick", function (event) {
  // Mettez votre logique de gestion de clic de notification ici
  console.log("notification action event", event);
  console.log(
    "notification event.notification.data_________________________________________________________________________________",
    event.notification.data
  );

  const action = event.notification.actions[0].action; // Obtenez l'action de la notification cliquée
  const notification = event.notification; // Obtenez l'objet de notification
    
  // Comparez l'action pour déterminer quelle action a été cliquée
  switch (action) {
    case "Ouvrir":
      // Action "Ouvrir le message" a été cliquée, ajoutez votre logique ici
      // Par exemple, ouvrez une page spécifique ou effectuez une autre action.
      // Vous pouvez également accéder aux données supplémentaires dans event.notification.data si nécessaire.
      // title: obj.title,
      //   body: obj.body,
      //   toPage: obj.toPage,
       console.log('Action "Ouvrir" a été cliquée.');
      event.notification.close();

      event.waitUntil(clients.openWindow(event.notification.data.toPage));

     
      break;
    case "Partagez":
      // Action "Ignorer" a été cliquée, ajoutez votre logique ici si nécessaire

      async function partage(obj) {
        const data = {
          title: obj.title,
          text: obj.body,
          url: obj.toPage,
        };
        if (navigator.share) {
          try {
            await navigator.share(data);
          } catch (e) {
            console.log("share error", e);
          }
        } else {
          partagerSurReseauxSociaux(data.url, data.title, data.text);
        }
      }

      partage(event.notification.data);

      console.log('Action "Partagez" a été cliquée.');
      break;
    default:
      // Gestion d'autres actions ou aucune action spécifiée
      console.log(`Action inconnue a été cliquée.`);
  }
});

// Gestion des notifications push
self.addEventListener("push", function (event) {
  console.log("PUSH_EVENT________________:__", event);
  console.log("PUSH_EVENT___event.data.json()__:__", event.data.text());
  console.log("PUSH_EVENT___event.data.json()__:__", event.data.json());
  const notification = event.data.json();

  const payload = {
    data: {
      title: notification.title,
      body: notification.body,
      toPage: notification.url,
    },
    actions: [{ action: "Ouvrir", title: "LIRE PLUS..." }],
    vibrate: [200, 100, 200, 100, 200, 100],
    body: notification.body,
    image: notification.image,
    badge: "https://www.cmfidouala.com/images/badge.png",
    icon: notification.image,
    title: notification.title,
  };

  event.waitUntil(
    self.registration.showNotification(notification.title, payload)
  );
});

// Gestion des tâches de synchronisation
self.addEventListener("sync", function (event) {
  console.log("PUSH_EVENT________________:__", event);
  console.log("PUSH_EVENT___event.data.json()__:__", event.data.json());
  const notification = event.data.json();

  const payload = {
    data: {
      title: notification.title,
      body: notification.body,
      toPage: notification.url,
    },
    actions: [{ action: "Ouvrir", title: "LIRE PLUS..." }],
    vibrate: [200, 100, 200, 100, 200, 100],
    body: notification.body,
    image: notification.image,
    badge: "https://www.cmfidouala.com/images/badge.png",
    icon: notification.image,
    title: notification.title,
  };

  event.waitUntil(
    self.registration.showNotification(notification.title, payload)
  );
});







