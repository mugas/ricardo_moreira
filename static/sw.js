importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/094317ea23c66903d737.js",
    "revision": "bbfee6d1f645c7153eae12ac6dc2ce72"
  },
  {
    "url": "/_nuxt/09ef1670776ceec8ec3e.js",
    "revision": "662d07269b973572531941d82036b2bd"
  },
  {
    "url": "/_nuxt/3cb07e5e46440a22110e.js",
    "revision": "b413d3ff0dc96738df33e9fdfd101a54"
  },
  {
    "url": "/_nuxt/539c242f1053c2561581.js",
    "revision": "ab9116557d3c904b72b8103362815c65"
  },
  {
    "url": "/_nuxt/5e7534155dde9412930f.js",
    "revision": "94000178e9185e0dd16347407fce6688"
  },
  {
    "url": "/_nuxt/7ee5a60dce232ca2a3a6.js",
    "revision": "189b20158672a9d3b55efd5991ee49d4"
  },
  {
    "url": "/_nuxt/b2f124c56d69351e04d7.js",
    "revision": "591abfd7d2bfe18c31a8a19ed3fb30ca"
  },
  {
    "url": "/_nuxt/b8e743486ea38cb8cc1a.js",
    "revision": "1e43eea59c6879f3643c48422227ddf6"
  },
  {
    "url": "/_nuxt/c21ed5a7cb168b07f2bb.js",
    "revision": "f4c246095455be7c3670fcf6124971ea"
  },
  {
    "url": "/_nuxt/e24ea195a84f1dff0353.js",
    "revision": "0ec9f1ea006ab81f5326a11df3085186"
  },
  {
    "url": "/_nuxt/fc58a386f97e243983dc.js",
    "revision": "0b3a7f63336f206e3864129fbe7cec32"
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
