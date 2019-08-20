<template lang="html">
  <div class="main">
    
    <!-- <div class="posts-list">
      <h2 class="posts-list-title">Posts</h2>
      <p class="post-link" v-for="post in blogPosts"><n-link :to="post._path">{{post.title}}</n-link></p>
      <p v-for="post in blogPosts">{{post.date}}</p>
        
    </div> -->
  <Tags/>
    <div class="posts-list" v-for="post in blogPosts">
      <p><n-link :to="post._path">{{post.title}}</n-link></p>
      <p>{{post.date}}</p>
      <p>{{post.body}}</p>
      <div class="one">
      <img class="text" :src="post.thumbnail">
      
      </div>
    </div>
    
  </div>
</template>

<script>
import Tags from "@/components/Tags";
export default {
  components: {
    Tags
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    }
  }
};
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
