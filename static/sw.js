importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0e94ce39443931d7ebf5.js",
    "revision": "0f50848f3489d625060f024f8007e66f"
  },
  {
    "url": "/_nuxt/26be58aa481030311883.js",
    "revision": "5c1f7635c377d0ed781d3692889d2e92"
  },
  {
    "url": "/_nuxt/360f8b288148e6c84771.js",
    "revision": "f4410c456ac299c3e9ee4aa475c91db9"
  },
  {
    "url": "/_nuxt/43b32d0a5ed495257eb7.js",
    "revision": "564b01df9547e93c5d4fbe80e1d3b87b"
  },
  {
    "url": "/_nuxt/61261de73a120bf7fea2.js",
    "revision": "adb4beaf2602088bed937598670bc4cb"
  },
  {
    "url": "/_nuxt/675173f34db491cc3a9d.js",
    "revision": "aa0eee17498049105846e2463920d000"
  },
  {
    "url": "/_nuxt/7c727198d844ed3c652b.js",
    "revision": "95ef85bf3fe0b6821c0bf3145e37b3cd"
  },
  {
    "url": "/_nuxt/859219900590c31ebc0a.js",
    "revision": "3bb77d39ac8dd3c12fc3be1b9c733414"
  },
  {
    "url": "/_nuxt/87b8b17ae9b68c1883f8.js",
    "revision": "e564d05181e5cd3f5d36ddde04aa3096"
  },
  {
    "url": "/_nuxt/8ffbf835697e88349d31.js",
    "revision": "d7609f9d3ab3745ba0f72eac03b21490"
  },
  {
    "url": "/_nuxt/abcc21718dd24297ae21.js",
    "revision": "18b32bd5db9eb47e3922dd3b8749e960"
  },
  {
    "url": "/_nuxt/e4cad1bb0117b40a27fa.js",
    "revision": "0998f72a611c544205b2f2f27ef63cfc"
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
