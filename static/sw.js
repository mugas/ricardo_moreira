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
    "url": "/_nuxt/409a1dd5804a4d9cff4c.js",
    "revision": "8ad16510b1595edebb575759b8f5a8e2"
  },
  {
    "url": "/_nuxt/552f83bcc0fc34bc9d7d.js",
    "revision": "9f5271b9093035d6dbfe97afc0897c88"
  },
  {
    "url": "/_nuxt/74fd4cbb26428885b282.js",
    "revision": "4d4711f3b16e6549ed9d0f12ec83a852"
  },
  {
    "url": "/_nuxt/d06e8a746a5d51bb0d7e.js",
    "revision": "d257a9962fbbdefa2c02dd07543dc66e"
  },
  {
    "url": "/_nuxt/db9f8c8c911a308cdc2b.js",
    "revision": "b144c9478f14292e01f2c7075ba6e7fc"
  },
  {
    "url": "/_nuxt/ecfe7166de7479d59168.js",
    "revision": "0bea4221ceaca3ebf04e5ea72244652b"
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
