<template lang="html">
  <div class="main">

    <SocialMedia/>
    <div class="main-header">
      <h1>{{siteInfo.sitename}}</h1>
      <p>{{siteInfo.sitedescription}}</p>
    </div>
   
      <a href="/blog">Blogis</a>
    <div class="posts-list">
      <h2 class="posts-list-title">Posts</h2>
      <p class="post-link" v-for="post in blogPosts"><n-link :to="post._path">{{post.title.length[10]}}</n-link></p>
      
    </div>
    <div class="posts-list">
      <h2 class="posts-list-title">Pages</h2>
      <p class="post-link" v-for="page in allPages"><n-link :to="page._path">{{page.title}}</n-link></p>

    </div>

    <button v-on:click="test()">Hello</button>
   
  </div>
</template>

<script>

import SocialMedia from '../components/SocialMedia/SocialMedia'

export default {
  components:{
  
  SocialMedia
 },

  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
      
    },
    siteInfo() {
      return this.$store.state.siteInfo;
    },
    allPages() {
      return this.$store.state.allPages;
    }
  },
  methods:{
    test(){
      console.log("hello");
     console.log(this.$store.state.blogPosts)
     
    }
  }
}

</script>

<style lang="css" scoped>
.posts-list {
  width: 100%;
  background-color: whitesmoke;
  padding: 20px;
  margin-top: 35px;
}
.post-link {
  padding-top: 10px;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.main-header {
  text-align: center;
}
</style>
