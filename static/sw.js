importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/164203f2aaef09e3513c.js",
    "revision": "42cb5418e2dc88fd7c5a835c311a81fa"
  },
  {
    "url": "/_nuxt/1764adc3b2d48f626bdc.js",
    "revision": "60b1c74feef2b4a7996d54ce5b32a1ce"
  },
  {
    "url": "/_nuxt/951c7fa30bcc905d9cf3.js",
    "revision": "966e6a67f35f0bd02d22f5d5fc7737d5"
  },
  {
    "url": "/_nuxt/9fd7ef8b630593b3c8a1.js",
    "revision": "3f6a04ad4d0e7db4fced03cbb9d07ea0"
  },
  {
    "url": "/_nuxt/c52b8ce28b2aa0381c56.js",
    "revision": "32a5a183e24a7c75d16c56973a05c657"
  },
  {
    "url": "/_nuxt/d3bf67c33365cc938028.js",
    "revision": "190d5fe55731c685584f77c56a3bf16e"
  },
  {
    "url": "/_nuxt/d68a4b1c65df13481a1c.js",
    "revision": "e401cc1fd3d250292f44520098819ed1"
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
