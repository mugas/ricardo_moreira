<template lang="html">
  <div class="post">
    <h1 class="title">{{title}}</h1>
    <p class="date">Posted by {{author}} on {{date}}</p>
    <div class="body" v-html="$md.render(body)"/>
    <p class="back"><a class="back-link" @click="$router.back()">Back</a></p>
   <!--  <p>{{tag[0]}}</p> -->
   <p>{{ tag }}</p>
   <div>
     <img :src="thumbnail">
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, app, payload, route, store }) {
    /*
    Interestingly, if you just return the raw post object as it is imported,
    Nuxt fails to build, but if you create your own object with the data you
    need, it works. The issue is discussed here, but apparently it wasn't
    completely fixed. https://github.com/nuxt-community/apollo-module/issues/163
    However, I like the code more this way anyway--it's more explicit what
    you're bringing in from the JSON.
    */
    let post = await import(`~/content/blog/${params.slug}.json`);

    return {
      date: post.date,
      body: post.body,
      title: post.title,
      author: post.author,
      thumbnail: post.thumbnail,
      tags: post.tags
    };
  },
  computed: {
    tag: function() {
      let vm = this;
      let tag = vm.tags.split(",");
      console.log(tag[0]);
      /* let vm = this;
      console.log(vm.post.tags);
      let tag = post.tags.split(",");
      console.log(tag); */
    }
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
  background-color: whitesmoke;
  padding: 20px;
}
</style>
