importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/19cb92885747c5b5d18b.js",
    "revision": "c85e58a8b7076cf27497b0ee461506e4"
  },
  {
    "url": "/_nuxt/1d8431fc04b5a773593a.js",
    "revision": "3a5cb55d031b1d26f1fe156a563f76bb"
  },
  {
    "url": "/_nuxt/1f2f0d4aa75072d7f35a.js",
    "revision": "7ead73f6f22a96898987c312a9d61367"
  },
  {
    "url": "/_nuxt/2e7af22a3b93172a0597.js",
    "revision": "9459499e7b075c0a49176b396a32dd9a"
  },
  {
    "url": "/_nuxt/3e90520049eb853e23b8.js",
    "revision": "80769af8abd81eac0ce1ebc0ea91b586"
  },
  {
    "url": "/_nuxt/4476406cdbacfef2b65d.js",
    "revision": "9615698bf070f64802ea24cfb4d88c44"
  },
  {
    "url": "/_nuxt/5290adb234571f5cf093.js",
    "revision": "54100e35b0b2b180b4bdb44ed9ba31a1"
  },
  {
    "url": "/_nuxt/672aab444c04d6ff5b77.js",
    "revision": "ae8390e082ebf6db7199f43610bdd755"
  },
  {
    "url": "/_nuxt/72821ba224adfd19f839.js",
    "revision": "f99720d5e1c4340de18356408dabe7f5"
  },
  {
    "url": "/_nuxt/75cea4112b799615ffc5.js",
    "revision": "d477b9c2b268e309f68b041bfd228923"
  },
  {
    "url": "/_nuxt/7f05b2474a271f42fd5d.js",
    "revision": "996ca6e18df79d6406e6f3e1622473ba"
  },
  {
    "url": "/_nuxt/bdde0116d1d1efd2e7c9.js",
    "revision": "0d59930aa57d5b877252066da79b2f3e"
  },
  {
    "url": "/_nuxt/f0546395b8b5f0a376f7.js",
    "revision": "475afce2b12d5ef734fb2750ed259ab3"
  },
  {
    "url": "/_nuxt/fe7aa4e2cd838a5ce8ad.js",
    "revision": "26abafc9ae8b477cf8448675e2d932ca"
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
