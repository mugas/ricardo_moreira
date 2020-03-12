importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/22c25cf4f7296833d017.js",
    "revision": "730e3f80397efc7f65d0ff412fbf4b5e"
  },
  {
    "url": "/_nuxt/4620c025d271e7ea1cfc.js",
    "revision": "971387c10c94f0a191ba200ae223b5fc"
  },
  {
    "url": "/_nuxt/5a3b8710e89a01434d05.js",
    "revision": "7d4165531121c2e089acbde006a92ae3"
  },
  {
    "url": "/_nuxt/6e242c30c6dcf15fcc91.js",
    "revision": "09104afddf2943ee1a28a2d9c5da065b"
  },
  {
    "url": "/_nuxt/857e662046fed7498918.js",
    "revision": "5deff9c04090e9c6c543a766c572ca32"
  },
  {
    "url": "/_nuxt/8b0ad11b4b643a8c18d9.js",
    "revision": "a03bb21600903047519c72d048ef36a8"
  },
  {
    "url": "/_nuxt/aa4eedbb3efce1aaf6d2.js",
    "revision": "571420fe0d6b94a550cdd2ff842faa06"
  },
  {
    "url": "/_nuxt/bc2da55a9ebafb3d88c8.js",
    "revision": "933b1b0f9b23b1c50056edc5bc1974e5"
  },
  {
    "url": "/_nuxt/e1e2f6b0dc84d6954b90.js",
    "revision": "4e3cbe1c9eb58470b5a7b79454ef9e52"
  },
  {
    "url": "/_nuxt/fa3d78f72b7d5e864452.js",
    "revision": "8ae7ea2f70541bc8023c53649ba1d5ee"
  }
], {
  "cacheId": "nuxt-netlifycms-boilerplate",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
