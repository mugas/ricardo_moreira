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
    "url": "/_nuxt/1e2edf9ee5dd09956afb.js",
    "revision": "274dda97c9fb92f210bfda4944ae746f"
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
    "url": "/_nuxt/de01f412d923e457c9cc.js",
    "revision": "091203b2454bef2c75e220d3aded783f"
  },
  {
    "url": "/_nuxt/e882425eef9c5910459f.js",
    "revision": "8d28ed0e4e925280994adf3bc488acd7"
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
