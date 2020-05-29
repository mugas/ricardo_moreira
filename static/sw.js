importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/13477b2c645e4942754b.js",
    "revision": "4f41edef02c1edd5c07cae433e09964f"
  },
  {
    "url": "/_nuxt/2d0b0add0c748a8fd75e.js",
    "revision": "395f80987bffa04d75eea348c0a17383"
  },
  {
    "url": "/_nuxt/59845d90c4547f46658b.js",
    "revision": "9e8aade16fb807000d11e063e9dd6fab"
  },
  {
    "url": "/_nuxt/59a816fac43243be168d.js",
    "revision": "fc812ce3634dbcf85fbcae2dd336c6e9"
  },
  {
    "url": "/_nuxt/5f79af992859165f94e7.js",
    "revision": "af7bd1e1fcbe91dad6c5032853b75a0f"
  },
  {
    "url": "/_nuxt/a34059c1bc56da62fa23.js",
    "revision": "f16d22979fd123c2aafab016f4a8e871"
  },
  {
    "url": "/_nuxt/ad6e24caf559df61cabf.js",
    "revision": "46b3db56172bcf405b4030ed84b351fe"
  },
  {
    "url": "/_nuxt/b417889c5ca581d8e3d9.js",
    "revision": "ee9c135adce7540a09835161ce967bc2"
  },
  {
    "url": "/_nuxt/c2ceceb4df82f5f6d06a.js",
    "revision": "b1e1d75675eb3fad476522389acfbbf3"
  },
  {
    "url": "/_nuxt/c479e54cc6c21ae124d1.js",
    "revision": "1935912caa19ad58cfdcc3d09142567e"
  },
  {
    "url": "/_nuxt/cb106af8c09be6bb2f21.js",
    "revision": "18e9985a0d3c0b55db4467a7918e906b"
  },
  {
    "url": "/_nuxt/da7b86c16ebb3a0dea32.js",
    "revision": "7def46dd9274f1d021b0a2bda5781712"
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
