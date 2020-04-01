	<!-- <div class="posts-list">
      <h2 class="posts-list-title">Posts</h2>
      <p class="post-link" v-for="post in blogPosts"><n-link :to="post._path">{{post.title}}</n-link></p>
      <p v-for="post in blogPosts">{{post.date}}</p> 
    </div> 
    <div class="posts-list" v-for="post in blogPosts">
      <div :style="{backgroundImage: 'url(' + post.thumbnail + ')'}" class="post-preview-tumbnail"></div>
      <p><n-link :to="post._path">{{post.title}}</n-link></p>
      <p>{{post.thumbnail}}</p>
      <img class="post_preview" :src="post.thumbnail">
      <p>{{post.date}}</p>
      <p>{{post.body}}</p>-

</div>-->
<template lang="html">
<section id="posts">
  <div class="post-preview" v-for="post in blogPosts">
      <img class="post-preview-thumbnail" :src="post.thumbnail">
      <p><n-link :to="post._path">{{post.title}}</n-link></p>
      <p>{{post.date}}</p>
  </div>
</section>
     
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

<style scoped>




 #posts{
    padding-top:2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex:1;
    flex-wrap: wrap;
}
 @media(min-width: 35rem){
    #posts{
        flex-direction: row;
    }
} 

a{
    text-decoration: none;
    color:black;
}

.post-preview{
    border-radius:3px;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.5);
    width: 90%;
    height: 20rem;
    margin:1rem;
    text-align: center;
}

.post-preview-thumbnail{
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 10rem;
}

.post-preview-content{
    text-align: center;
    padding: 1rem;
}

@media(min-width: 35rem){
    .post-preview{
        width:25rem;
        
    }
}

 

</style>


