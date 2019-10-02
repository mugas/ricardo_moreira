importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07c7f1735204e2f7c169.js",
    "revision": "1a128ea7e5bf369d0d04b52026d94605"
  },
  {
    "url": "/_nuxt/1350baa95a8e672ce101.js",
    "revision": "654b64bb6977caaa927da9e463438f0e"
  },
  {
    "url": "/_nuxt/16b0466837711c3df7bc.js",
    "revision": "36de514073539ccf16339bd9b339dbce"
  },
  {
    "url": "/_nuxt/3eec0ad01c58699b1205.js",
    "revision": "09a0df74d95346a8e1300b948e47b4d1"
  },
  {
    "url": "/_nuxt/828453e5d8199f3b685c.js",
    "revision": "e60ae4bf9a7a6e03b45c322238a3d115"
  },
  {
    "url": "/_nuxt/a29c75d632506ead4e53.js",
    "revision": "52858530d6f3b453e117e68c8a38c370"
  },
  {
    "url": "/_nuxt/c017e49d4940c778f555.js",
    "revision": "9456576259dcbdcaf4effe71221a0172"
  },
  {
    "url": "/_nuxt/e3b4a3e0355af9dac714.js",
    "revision": "1a9c3678290559036760c00b90889d40"
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
