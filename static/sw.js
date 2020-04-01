importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02147ab9180b20bea93d.js",
    "revision": "d1218681f08097bf5390ac10a5ceecc8"
  },
  {
    "url": "/_nuxt/0f068541b0fb09cf15b8.js",
    "revision": "17f4bc7525f8349d9071f43d4a984ed3"
  },
  {
    "url": "/_nuxt/13d313d815ea2bc76df3.js",
    "revision": "e2ae07e8b3645e7b7146d6a1275defa1"
  },
  {
    "url": "/_nuxt/288b122bd1c8cb18da9f.js",
    "revision": "258b38e60c0366db0621ae9a3d2a1baf"
  },
  {
    "url": "/_nuxt/408e10346279bd778411.js",
    "revision": "785f2027433ae01dd7a283883fb9cea6"
  },
  {
    "url": "/_nuxt/4c474b732835e5177e67.js",
    "revision": "827030f841979ffd798839dfc4a7af7c"
  },
  {
    "url": "/_nuxt/545945959ba1fa00d644.js",
    "revision": "c510d3e26be3561027c6a58472089a8c"
  },
  {
    "url": "/_nuxt/65d888ac0ca719fe6f45.js",
    "revision": "a3ee15d59820f182ec7d768b8a808615"
  },
  {
    "url": "/_nuxt/841dfa18e8cf3216fe13.js",
    "revision": "98288bac305007176856724b57465a92"
  },
  {
    "url": "/_nuxt/a5922a906610d718d2f0.js",
    "revision": "31a4f85fab63329a2eee1389507a400a"
  },
  {
    "url": "/_nuxt/ca54b70ccc1b31638eb8.js",
    "revision": "5f3ab8cf13df3d4e3b7e8199dd5eca6a"
  },
  {
    "url": "/_nuxt/cc157dc2c6b8029ebcb2.js",
    "revision": "eb9cc9d0e623ae34c910553ac72606e7"
  },
  {
    "url": "/_nuxt/d5a0e666fe7f34c88c0d.js",
    "revision": "aad7fab9e6c781bc1dd70d291da3dccd"
  },
  {
    "url": "/_nuxt/f581f4c3071987564f62.js",
    "revision": "067d2900792b312bef56f43999cddcc9"
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
