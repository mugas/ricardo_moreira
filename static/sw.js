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
    "url": "/_nuxt/256cd6f3c000fe1c66ab.js",
    "revision": "53d92ea300d5a9e5a67d2e71631d9cf7"
  },
  {
    "url": "/_nuxt/409a1dd5804a4d9cff4c.js",
    "revision": "8ad16510b1595edebb575759b8f5a8e2"
  },
  {
    "url": "/_nuxt/4d410f1b0790a6700447.js",
    "revision": "036b1091323f869eca170cf82e9c7b5f"
  },
  {
    "url": "/_nuxt/590f0363ce4ce957caad.js",
    "revision": "a8eb7f05014ac06b9f5bc061376b85d7"
  },
  {
    "url": "/_nuxt/c0135ad8bf236ebaf14d.js",
    "revision": "21cf76dcd177924b9847f5b0489fc4ff"
  },
  {
    "url": "/_nuxt/f90283949d8b88e93aa0.js",
    "revision": "7b514a5f26ef624000f6d0103660773f"
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
