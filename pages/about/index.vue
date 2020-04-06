<template>
  <div class="main">
    <div class="posts-lists">
      <h2 class="posts-list-title">Pages</h2>
      <p>hELLO</p>
      <p>{{aboutPage.body}}</p>
      <p>{{siteInfo.sitename}}</p>
    </div>
  </div>
</template>



<script>
export default {
  computed: {
    aboutPage() {
      return this.$store.state.aboutPage;
    },
    siteInfo() {
      return this.$store.state.siteInfo;
  }
}
}
</script>

<style>
</style>