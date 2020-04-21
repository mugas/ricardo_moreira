import path from "path";
import glob from "glob";
import pkg from "./package";
import info from "./content/setup/info";
import about from "./content/about/about-me";

const dynamicRoutes = getDynamicPaths({
  "/blog": "blog/*.json",
  "/projects": "projects/*.json"
});

console.log(dynamicRoutes);
console.log("hello");

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: info.sitename,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/markdownit",
    "@nuxtjs/axios", // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/pwa",
    "@nuxtjs/svg",
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ]
  ],
  markdownit: {
    injected: true,
    preset: "default",
    breaks: true,
    html: true
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    routes: dynamicRoutes
  }
};

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      const filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: "content" })
        .map(filepath => `${url}/${path.basename(filepath, ".json")}`);
    })
  );
}
