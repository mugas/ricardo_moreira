<template>
  <div class="main">
    <div class="posts-lists">
      <h2 class="posts-list-title">Pages</h2>
      <p class="post-link" v-for="page in allPages">
        <n-link :to="page._path">{{page.title}}</n-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    allPages() {
      return this.$store.state.allPages;
    }
  }
};
</script>

<style>
</style>