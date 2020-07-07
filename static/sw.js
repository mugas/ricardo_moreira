importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0b97abdc314785b0cd5a.js",
    "revision": "8e68bacf26e0149adfaef898b59ec671"
  },
  {
    "url": "/_nuxt/18e2fcc4412d7a5f1555.js",
    "revision": "56dff6d9c602aa2e8830308358c68877"
  },
  {
    "url": "/_nuxt/1c034d1143253c2bb677.js",
    "revision": "bc04f828351e8110bc2ff5a39e29c72f"
  },
  {
    "url": "/_nuxt/1e4fbbf02a1190f8061d.js",
    "revision": "0afc5bef603cedbe3e843d7561d9620c"
  },
  {
    "url": "/_nuxt/4dcf0a9acf84172a8a08.js",
    "revision": "3301c2630b26d0e352d8d432f29c9127"
  },
  {
    "url": "/_nuxt/8e6d655472198c099eb9.js",
    "revision": "84714893eaa61c1d74f6d2eac037ffab"
  },
  {
    "url": "/_nuxt/a21d3cd65f559cbe514e.js",
    "revision": "2b82dbc39b4984cdbeb99ed68fe2cbe1"
  },
  {
    "url": "/_nuxt/b700d0461a7faf19eb01.js",
    "revision": "343a3266270bdedbcb22c17dd724a42f"
  },
  {
    "url": "/_nuxt/ca180c5a061584d08135.js",
    "revision": "f899f1f931cee2a95a98e66602cae709"
  },
  {
    "url": "/_nuxt/cf5d97057d42abc743cd.js",
    "revision": "2b49583dd0f9c2ab0c1bb2dfb473f4bf"
  },
  {
    "url": "/_nuxt/feb57d49d99577a22095.js",
    "revision": "eb19d2fe2491eadfdf2dfc47e10a29db"
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
