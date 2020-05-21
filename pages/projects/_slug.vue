<template lang="html">
  <div class="post">
    <h1 class="title">{{title}}</h1>
    <p class="date">Posted by {{author}} on {{date}}</p>
    <div class="body" v-html="$md.render(body)"/>
    <p>{{code}}</p>
    <!-- <div v-html="$md.render(code)"></div> -->
    <p class="back"><a class="back-link" @click="$router.back()">Back</a></p>
  </div>
</template>

<script>
export default {
  async asyncData({ params, app, payload, route, store }) {
    /*
    Interestingly, if you just return the raw post object as it is imported,
    Nuxt fails to b uild, but if you create your own object with the data you
    need, it works. The issue is discussed here, but apparently it wasn't
    completely fixed. https://github.com/nuxt-community/apollo-module/issues/163
    However, I like the code more this way anyway--it's more explicit what
    you're bringing in from the JSON.
    */
    let page = await import(`~/content/projects/${params.slug}.json`);
      console.log(page)
    return {
      date: page.date,
      body: page.body,
      title: page.title,
      author: page.author,
      code: page.code
    };
  }
};
</script>

<style lang="css" scoped>
.back,
.date,
.body {
  padding-top: 10px;
}
.back-link {
  text-decoration: underline;
  color: #3b8070;
  cursor: pointer;
}

.date {
  color: darkgray;
}
.post {

  padding: 20px;
}
</style>
