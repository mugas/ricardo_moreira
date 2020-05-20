<template lang="html">
  <div class="post">
    <h1 class="title">{{title}}</h1>
    <p class="date">Posted by {{author}} on {{date}}</p>
    <div class="body" v-html="$md.render(body)"/>
    <p class="back"><a class="back-link" @click="$router.back()">Back</a></p>
    <p>{{tags[0]}}</p>
  <!-- <p>{{ tag }}</p>  -->
  <button v-on:click="hasTag()">Javascript</button>

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
    methods: {
    hasTag: function() {
      console.log(this);
      let hasTag = this;
      if (this.tags.includes("javascript")) {
        console.log("true");
      }
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

span{
  color:yellow;
}

.test{color:blue}
</style>


  
  /* computed: {
      tag: function() {
      console.log(this);
      let vm = this;
      let tag = vm.tags;
      console.log(tag);
    }, 

    hasTag: function() {
      console.log(this);
      let hasTag = this;

      if (this.tags.includes("javascript")) {
        console.log("true");
      }
    }
  }
  1-gather all same tags together and
  present them in one array
 */