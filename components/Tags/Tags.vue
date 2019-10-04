<template lang="html">
  
  
   <button v-on:click="hasTag()">Javascript</button> 

   
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
    console.log(post);
    return {
      date: post.date,
      body: post.body,
      title: post.title,
      author: post.author,
      thumbnail: post.thumbnail,
      tags: post.tags
    };
  },

  /* computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    }
  }, */

  methods: {
    hasTag: function() {
      //console.log(this);
      //let hasTag = this;
      if (this.tags.includes("javascript")) {
        console.log("true");
      }
    }
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    }
  }
};
</script>