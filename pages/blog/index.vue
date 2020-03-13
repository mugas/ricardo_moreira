<template lang="html">
  <div class="main">
    
    <!-- <div class="posts-list">
      <h2 class="posts-list-title">Posts</h2>
      <p class="post-link" v-for="post in blogPosts"><n-link :to="post._path">{{post.title}}</n-link></p>
      <p v-for="post in blogPosts">{{post.date}}</p>
        
    </div> -->
  
  
    <div class="posts-list" v-for="post in blogPosts">
      <!--<div class="one">
      <img class="post_preview" :src="post.thumbnail">
      </div>-->
      <div :style="{backgroundImage: 'url(' + post.thumbnail + ')'}" class="post-preview-tumbnail"></div>
      <p><n-link :to="post._path">{{post.title}}</n-link></p>
      <p>{{post.date}}</p>
      <p>{{post.body}}</p>
      
    </div>
    
  </div>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    }
  }
};
</script>

<style lang="css" scoped>
/*
.posts-list {
  width: 100%;
  background-color: red;
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
*/
a{
  text-decoration: none;
  color:black;
}

.posts-list{
  border-radius: 3px;
  box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.5);
  width:90%;
  margin: auto;
  height: 20rem;
}

.one{
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 10rem;
}

.post-preview-thumbnail{
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 10rem;
}



</style>
