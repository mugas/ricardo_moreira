importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06c0f78c25a9cfc6d918.js",
    "revision": "1d256288626dda6f841b7c28caef4c63"
  },
  {
    "url": "/_nuxt/17816090555b5433d16b.js",
    "revision": "9c35e120992468ccefd6dac6a6c0c822"
  },
  {
    "url": "/_nuxt/45108521a05b0df18162.js",
    "revision": "27c48b86bda2d8a6c0613e47f02d9fb2"
  },
  {
    "url": "/_nuxt/859219900590c31ebc0a.js",
    "revision": "3bb77d39ac8dd3c12fc3be1b9c733414"
  },
  {
    "url": "/_nuxt/9adf81700318eb8bb506.js",
    "revision": "f90bcfba13c8a506257a991ca2edcf18"
  },
  {
    "url": "/_nuxt/c217221148a08ef91264.js",
    "revision": "797a6cb2a0f82b26828c0dfbcccc46e4"
  },
  {
    "url": "/_nuxt/c632535b8d5dcaef007e.js",
    "revision": "d34ce39eaf3c05ecb1f9230baceb85c3"
  },
  {
    "url": "/_nuxt/d50ff004e6529d98cc34.js",
    "revision": "d1324505e5797ea7ba348af89b18f1f9"
  },
  {
    "url": "/_nuxt/d86c221b814a008269c2.js",
    "revision": "297ced2b446fa19005dbcdd3885caac5"
  },
  {
    "url": "/_nuxt/de1cd8758c955c3c3fad.js",
    "revision": "6c060b50162268cd421889d84b62b713"
  },
  {
    "url": "/_nuxt/e65b60bb8bc8ec373117.js",
    "revision": "ed8740ad68730e92ccf3b0b85bd2880a"
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
