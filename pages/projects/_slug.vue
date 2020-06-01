<template lang="html">
  <div class="project">
    <h1 class="project__title">{{title}}</h1>
    <div class="project__text" v-html="$md.render(body)"/>
    <div class="project__footer">
      <button class="project__back-link" @click="$router.back()">Back</button>
      <p class="project__signature">Created by {{author}} - Good Stuff Codes</p>
    </div>
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
      description: page.description
    };
  }
};
</script>

<style lang="css" scoped>

.project{
  font-size: 16px;
  line-height: 1.5;
  font-family: 'Inknut Antiqua', serif;
  padding: 20px;
}

.project__title{
  color:#C8882D;
  text-align: center;
  padding-top: 10px;
}

.project__text{
  color: #20263F;
}


.project__back-link{
  font-family:'Inknut Antiqua', serif;
  color:#A64E43;
  padding-left: 0;
  background:transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  font-size:16px;
}
.project__footer{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.project__signature{
  color:#A64E43; 
}

@media(min-width: 35rem){
  .project__text{
  margin-left: 25%;
  margin-right: 25%;
}

}



</style>
