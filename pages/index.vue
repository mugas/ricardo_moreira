<template lang="html">
  <div class="main">
    <Bug/>
    <MySvg/>
   

     <SocialMedia/>

  
    
   
  </div>
</template>

<script>

import SocialMedia from '../components/SocialMedia/SocialMedia'
import MySvg from '../components/MySvg/MySvg'
import Bug from '../components/Bug/Bug'


export default {
  components:{
  SocialMedia,
  MySvg,
  Bug
 }

  
  
}

</script>

<style lang="css" scoped>
*{
  box-sizing: border-box;
}

.posts-list {
  width: 100%;
  background-color: whitesmoke;
  padding: 20px;
  margin-top: 35px;
}
.post-link {
  padding-top: 10px;
}
/* .main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
} */
.main-header {
  text-align: center;
}
</style>
