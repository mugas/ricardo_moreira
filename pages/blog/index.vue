<template lang="html">
  <section id="posts">
    <div class="post__preview" v-for="post in blogPosts">
        <img class="post__thumbnail" :src="post.thumbnail">
        <h2><n-link :to="post._path">{{post.title}}</n-link></h2> 
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
}
.post__preview{
    border-radius:3px;
    box-shadow: 1px 1px 5px 1px rgb(200,136,45); 
    width: 90%;
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

h2{
  color:#C8882D;
  font-family: 'Inknut Antiqua', serif;
  font-size-adjust: inherit;
}
a{
    text-decoration: none;
    color:#C8882D;
    font-size:large;
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
      flex-wrap: wrap;
    }
    .post__preview{
      width:25rem;  
    }

    a{
    text-decoration: none;
    font-size: inherit;
    }
}
</style>


