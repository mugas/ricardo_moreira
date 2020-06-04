<template lang="html">
  <div class="post">
    <h1 class="post__title">{{title}}</h1>
    <div class="post__text" v-html="$md.render(body)"></div>
    <div class="post__footer">
      <button class="post__back-link" @click="$router.back()">Back</button>
      <p class="post__date">Posted by {{author}} on {{start}}</p>
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
      start: post.start,
      body: post.body,
      title: post.title,
      author: post.author,
      thumbnail: post.thumbnail,
      tags: post.tags
    };
  }
};

</script>

<style lang="css" scoped>

.post{
  font-size: 16px;
  line-height: 1.5;
  font-family: 'Inknut Antiqua', serif;
  padding: 20px;
}

.post__title{
color:#C8882D;
padding-top: 10px;
text-align: center;
}

.post__text{
  color: #20263F;
}

.post__footer{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.post__back-link{
  font-family:'Inknut Antiqua', serif;
  color:#A64E43;
  padding-left: 0;
  background:transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  font-size:16px;
}


.post__date{
  color:#A64E43; 
}

@media(min-width: 35rem){
  .post__text{
  margin-left: 25%;
  margin-right: 25%;
}

}

</style>


  
  