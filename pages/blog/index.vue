<template lang="html">
<section id="posts">
  <div class="post__preview" v-for="post in blogPosts">
      <img class="post__thumbnail" :src="post.thumbnail">
      <h1><n-link :to="post._path">{{post.title}}</n-link></h1> 
      <p class="post__excerpt">{{post.excerpt}}</p>
      <p class="post__date">{{post.start}}</p>
  </div>

  
</section>
     
</template>

<script>


export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    }
    
  },
 
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

h1{
  color:#C8882D;
  font-family: 'Inknut Antiqua', serif;
}

.post__excerpt{
  color:#20263F;
  font-family:'Inknut Antiqua', serif;
  font-weight: bold;
  margin:0;
}

.post__date{
  margin:0;
  padding-bottom: 8px;
  font-style: italic;
}

 @media(min-width: 35rem){
    #posts{
        flex-direction: row;
    }
} 

a{
    text-decoration: none;
    
}

.post__preview{
    border-radius:3px;
    box-shadow: 1px 1px 5px 1px rgb(200,136,45);
    width: 90%;
    /*height: 20rem;*/
    margin:1rem;
    text-align: center;
    background: #ECEEE5;
}

.post__thumbnail{
    background-position: 50%;
    background-size: cover;
    width: 100%;
    height: 10rem;
}
.post-preview-content{
    text-align: center;
    padding: 1rem;
}


@media(min-width: 35rem){
    .post__preview{
        width:25rem;
        
    }
}

</style>


