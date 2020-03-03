<template>
  <div class="layout">
    <div class="header">
      <!-- This link is an n-link because it links to another Nuxt route -->
      <n-link to="/">Home</n-link>
      <n-link to="/blog">Blog</n-link>
      <n-link to="/projects">Projects</n-link>
      <n-link to="/about">About</n-link>
    </div>
    <nuxt class="content" />
    <div class="footer">
      <p>
        <!-- This link is not an n-link because it is external -->
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/tylermercer/nuxt-netlifycms-boilerplate"
        >View this project on Github</a>
      </p>
      <p>
        <!-- This is not an n-link because the NetlifyCMS admin page is static.
        If you make it an n-link, you'll get a "Page could not be found" when
        you click it.-->
        <a href="/admin">NetlifyCMS Admin Login</a>
      </p>
    </div>
  </div>
</template>

/* <template>
  <div>
    <main class="main_content">
      <nuxt/>

    </main>
  </div>
</template> */

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>
*{
  box-sizing: border-box
}

body{
  font-family: "Lato", sans-serif
}

.main-content{
  margin-top: 4.5rem;
}
</style>
