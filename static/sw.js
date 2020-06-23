importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/33d337763e941e64df09.js",
    "revision": "52b850e5b903b1765980644a09450d59"
  },
  {
    "url": "/_nuxt/4bbf509bd79abd8ada8b.js",
    "revision": "b802fbe6be6fb92571cec22e7e91f8ea"
  },
  {
    "url": "/_nuxt/5494e972e1204cff953e.js",
    "revision": "29c591331a8fd2122d309deec04d1fe5"
  },
  {
    "url": "/_nuxt/642985d35d29114b0aa1.js",
    "revision": "498113c175198e8b9ef39d87dc430579"
  },
  {
    "url": "/_nuxt/a5f3e7ffd6f84d27cf82.js",
    "revision": "8b999fcc525b81695274241a5058a93f"
  },
  {
    "url": "/_nuxt/b2f124c56d69351e04d7.js",
    "revision": "591abfd7d2bfe18c31a8a19ed3fb30ca"
  },
  {
    "url": "/_nuxt/b6731304ea34658e4fec.js",
    "revision": "11992de5bbab424da3da692147b56342"
  },
  {
    "url": "/_nuxt/c98ff65c02b32589ef06.js",
    "revision": "c003df501adc48549c945e9e1754f735"
  },
  {
    "url": "/_nuxt/e24ea195a84f1dff0353.js",
    "revision": "0ec9f1ea006ab81f5326a11df3085186"
  },
  {
    "url": "/_nuxt/e7aba50c56037b8bf9af.js",
    "revision": "224e66e20b429b4610a054cced292384"
  },
  {
    "url": "/_nuxt/e7dc4fbd47d31f06b622.js",
    "revision": "3be284ddb501a568252e118888a742dc"
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
