<template>
  <div class="main">
      <h1>{{aboutPage.title}}</h1>
      <p>{{aboutPage.body}}</p>
      <img :src="aboutPage.thumbnail">
    </div>
  </div>
</template>



<script>
export default {
  computed: {
    aboutPage() {
      return this.$store.state.aboutPage;
    },
    
}
}
</script>

<style>
</style>