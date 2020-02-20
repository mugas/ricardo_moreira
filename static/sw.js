importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08ca6b8911de958dd75f.js",
    "revision": "e95bd307967f37a09e153c707ec9e61f"
  },
  {
    "url": "/_nuxt/0bb32d3d553281726298.js",
    "revision": "b2da9f389328208055105e03cb5c09d1"
  },
  {
    "url": "/_nuxt/16b0466837711c3df7bc.js",
    "revision": "36de514073539ccf16339bd9b339dbce"
  },
  {
    "url": "/_nuxt/18e9605674ae21fbf85f.js",
    "revision": "aa1b72e99c1e9959f00bb76d1617a130"
  },
  {
    "url": "/_nuxt/30d30643ca6478029174.js",
    "revision": "995b135be3fd766723a045694ef58bc2"
  },
  {
    "url": "/_nuxt/85528dcd8ec3a5cd395b.js",
    "revision": "b39b9a7c01dce536ad2119b51a8011b0"
  },
  {
    "url": "/_nuxt/9427937836695ef81100.js",
    "revision": "fd30c49727c1420f5014497385ec58b8"
  },
  {
    "url": "/_nuxt/a35945babd2b300c826e.js",
    "revision": "2660568ff78d61743925559b2d78b864"
  },
  {
    "url": "/_nuxt/e0a1b584289f1e5591d9.js",
    "revision": "13992721c10bb1a031a5083f253616ac"
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
