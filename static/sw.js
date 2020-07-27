importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/11541c1c01cf590ae8d4.js",
    "revision": "246b106d72c26e163156c3e6d85a59da"
  },
  {
    "url": "/_nuxt/1adf28d4513b0706a4fd.js",
    "revision": "b285c53f2295763fd227e3cfd8ea52b0"
  },
  {
    "url": "/_nuxt/23ade884d80b06730d09.js",
    "revision": "270adb2889a861a9e7de5e8780298384"
  },
  {
    "url": "/_nuxt/292e70ba8f0eaeb399f3.js",
    "revision": "95ffe74ec1bb60e4dea4ff4c9e900c17"
  },
  {
    "url": "/_nuxt/452b97ca34ac5f2f1b93.js",
    "revision": "a0019b57700e04abfe79cc9ef8c3a560"
  },
  {
    "url": "/_nuxt/6d8617a4c7321b119dd3.js",
    "revision": "45b43b3e9fe1a0561359eb5a6bfcfa0c"
  },
  {
    "url": "/_nuxt/751c5c3fd118c6d1ad00.js",
    "revision": "81f920a67208dddf8838195bc070a9d4"
  },
  {
    "url": "/_nuxt/9e7c875f7606df798dd2.js",
    "revision": "bab58819d8b7378f68d47c74853dcf22"
  },
  {
    "url": "/_nuxt/acf0fb8942ff0c8240a9.js",
    "revision": "b2ddb0bedee93072ed378664883f7696"
  },
  {
    "url": "/_nuxt/c8847a685b19035bafea.js",
    "revision": "36847f0a6266ffa8c42cc9b4611a8e01"
  },
  {
    "url": "/_nuxt/e6e08f157f74da8796db.js",
    "revision": "64e7cd0b0410f9c5d60ddc984f866a3c"
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
