<template lang="html">
  <div class="main">
 <SocialMedia/>
    <MySvg/>
    
   

    
   
  </div>
</template>

<script>

import SocialMedia from '../components/SocialMedia/SocialMedia'
import MySvg from '../components/MySvg/MySvg'


export default {
  components:{
  SocialMedia,
  MySvg,
  BugSvg
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
