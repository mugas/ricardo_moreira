import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = () => ({
  blogPosts: [],
  allPages: [],
  siteInfo: [],
  aboutPage: []
});

export const mutations = {
  SET_POSTS(state, data) {
    state.blogPosts = data;
  },
  SET_PAGES(state, data) {
    state.allPages = data;
  },
  SET_INFO(state, data) {
    state.siteInfo = data;
  },
  SET_ABOUT(state, data) {
    state.aboutPage = data;
  }
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch("getSiteInfo");
    await dispatch("getBlogPosts");
    await dispatch("getallPages");
    await dispatch("getAboutPage");
  },
  async getBlogPosts({ state, commit }) {
    const context = await require.context("~/content/blog/", false, /\.json$/);

    const searchposts = await context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace(".json", "").replace("./", "")}`
    }));

    commit("SET_POSTS", searchposts.reverse());
  },
  async getallPages({ state, commit }) {
    const context = await require.context(
      "~/content/projects/",
      false,
      /\.json$/
    );

    const pages = await context.keys().map(key => ({
      ...context(key),
      _path: `/projects/${key.replace(".json", "").replace("./", "")}`
    }));

    commit("SET_PAGES", pages.reverse());
  },
  getSiteInfo({ state, commit }) {
    const info = require("~/content/setup/info.json");
    commit("SET_INFO", info);
  },
  getAboutPage({ state, commit }) {
    const about = require("~/content/about/about-me.json");
    commit("SET_ABOUT", about);
  }
};
