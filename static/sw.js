importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07c7f1735204e2f7c169.js",
    "revision": "1a128ea7e5bf369d0d04b52026d94605"
  },
  {
    "url": "/_nuxt/0ac8f8e729025fa5aaf7.js",
    "revision": "7632af0cfd7db8dfbeae58860dffd082"
  },
  {
    "url": "/_nuxt/1353ae0125043b4c85d7.js",
    "revision": "418dc6edae70e06ef7aa74a8b658a886"
  },
  {
    "url": "/_nuxt/409a1dd5804a4d9cff4c.js",
    "revision": "8ad16510b1595edebb575759b8f5a8e2"
  },
  {
    "url": "/_nuxt/47ebf6afaaf29c16a115.js",
    "revision": "25055933f7984ff2bf949aa87af63482"
  },
  {
    "url": "/_nuxt/4d410f1b0790a6700447.js",
    "revision": "036b1091323f869eca170cf82e9c7b5f"
  },
  {
    "url": "/_nuxt/8fa39260acf1bdfd9523.js",
    "revision": "f2769499e1b2cd87f70a176dae2cfff4"
  },
  {
    "url": "/_nuxt/d08fbb06427a6aba154f.js",
    "revision": "5abef0fcbac522af18005580dc35f166"
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
