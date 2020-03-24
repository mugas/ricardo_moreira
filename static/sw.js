importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00f6507ba1f3db44e404.js",
    "revision": "9a2c78e134c585982bf58e4cf30de358"
  },
  {
    "url": "/_nuxt/073892b72436cccc3875.js",
    "revision": "7124d37b196403c661ff4e89dec0d4de"
  },
  {
    "url": "/_nuxt/2fcedc3a106305ff0fd5.js",
    "revision": "8bb3f2bc9f7c2de08adba8bc60540f80"
  },
  {
    "url": "/_nuxt/46f511c5ec2f5bea2dca.js",
    "revision": "228a811a9179bf22279b22f8a3691593"
  },
  {
    "url": "/_nuxt/5447fc42fe8326b4532a.js",
    "revision": "79cb326cea592110baf2a1bc2d7ea084"
  },
  {
    "url": "/_nuxt/5f0400beba4c27db4cfc.js",
    "revision": "1aead9ed1b0251b0f9fd3dcbfc8303bc"
  },
  {
    "url": "/_nuxt/8133fd3e6cb9ba718086.js",
    "revision": "61162e8d861e760c31cdc73b4357dd94"
  },
  {
    "url": "/_nuxt/8b0ad11b4b643a8c18d9.js",
    "revision": "a03bb21600903047519c72d048ef36a8"
  },
  {
    "url": "/_nuxt/c0157fc018113570114f.js",
    "revision": "4d60b30eb80c890cdd755c620956f462"
  },
  {
    "url": "/_nuxt/cb1dca7506015892276a.js",
    "revision": "7fcf25ec7c47d87b5b78fd42fc4c3f96"
  },
  {
    "url": "/_nuxt/d39727d540dcf1f71cb7.js",
    "revision": "d3893b9bde70172e8e31befe34111231"
  },
  {
    "url": "/_nuxt/d5ce61a2a5fd9352b012.js",
    "revision": "7dad16ac579d0a968c6cd146e7d177ce"
  },
  {
    "url": "/_nuxt/f0f26d8773b1db2dfea0.js",
    "revision": "d38eebb343e07e8455333e69a6dd2918"
  },
  {
    "url": "/_nuxt/f0fd30a2e2c3bc2dc320.js",
    "revision": "dfdfccd74a123a49f81e00ece1e54267"
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
