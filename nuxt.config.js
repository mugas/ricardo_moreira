import blogs from './content/blogs.json'
import codings from './content/codings.json'

export default {
  mode: 'universal',

  /*
   **   ers of the page
   */
  head: {
    script: [
      {
        type: 'text/javascript',
        src:
          'https://platform-api.sharethis.com/js/sharethis.js#property=5ff064f32bc64600181b0f01&product=sop',
        async: 'async',
      },
      {
        type: 'text/javascript',
        src:
          'window.$crisp=[];window.CRISP_WEBSITE_ID="d2fd4e85-84fb-4dee-9fc1-2ad0c79c3cb8";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})()'
      }
    ],
    title: 'Talking about code, building in public and more',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `http://ricardomoreira.io/`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Talking about code, building in public and more',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Talking about code, building in public and more',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Talking about code, building in public and more',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '~/assets/images/mysite.png',
      },
      {
        hid: 'og:article:author',
        property: 'og:article:author',
        content: 'https://github.com/mugas',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Ricardo Moreira',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      { name: 'twitter:site', content: '@moreira_creates' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Talking about code, building public and more',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Ricardo Moreira - Talking about code, building public and more',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /**
   * Plugins
   */
  plugins: [{ src: '~/plugins/lazyload' }, { src: '~/plugins/prism' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  /*
   ** Nuxt.js modules
   */

  buildmodules: [
    '@nuxtjs/fontawesome',
  ],
  modules: [
    ['@nuxtjs/google-tag-manager', { id: 'GTM-PV76V8S' }],
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-webfontloader',
    'nuxt-fontawesome',
    'vue-plausible',
  ],
  plausible: {
    domain: 'ricardomoreira.io',
  },


  /**
   * Google fonts
   */
  webfontloader: {
    google: {
      families: ['Halant:500', 'Nunito+Sans:300'],
    },
  },

  /**
   * Font Awesome
   */
  fontawesome: {
    component: 'Fa',


    icons: {

      brands: true,
    },
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: [
          'faTwitter',
          'faCss3',
          'faInstagram',
          'faGithub',
          'faVuejs',
          'faReact',
          'faJs',
          'faDocker',
          'faWordpress',
          'faNodeJs',
          'faYarn',
          'faFirefox',
          'faLinkedin',
        ]
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: [
          'faUser'
        ]
      }
    ],
  },

  /**
   * Manifest
   */
  manifest: {
    name: '<Blog Name>',
    short_name: '<Blog Name>',
    lang: 'en',
  },

  /**
   * sitemap
   */
  sitemap: {
    hostname: 'https://example.com',
    gzip: true,
    exclude: ['/admin/'],
  },

  /**
   * Robots
   */
  robots: {
    UserAgent: '*',
    Disallow: '/admin',
  },

  /**
   * Generate config
   */
  generate: {
    routes: [
      [].concat(blogs.map((blog) => `/blog/${blog.slug}`)),
      [].concat(codings.map((coding) => `/coding/${coding.slug}`)),
    ],
  },

  /**
   * Transition
   */
  transition: {
    name: 'fade',
    mode: 'out-in',
  },

  /*
   ** Build configuration
   */
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        })
      }

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          vue: true,
        },
      })
    },
  },
}
