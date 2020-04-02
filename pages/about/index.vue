<template>
  <div class="main">
    <div class="posts-lists">
      <h2 class="posts-list-title">Pages</h2>
      <p>{{about.title}}
      <p class="post-link" v-for="about in aboutPage">
        <n-link :to="about._path">{{about.title}}</n-link>
      </p>
    </div>
  </div>
</template>



<script>
export default {
  computed: {
    aboutPa() {
      return this.$store.state.aboutPage;
    }
  }
};
</script>

<style>
</style>