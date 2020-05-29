<template lang="html">
<div>
  <div class="main">
      <MySvg/> 
      <h1>Looking for Me?</h1>
  </div>
  <div class="main__title">
      <h2>Website on renovation. Sorry for the bugs.</h2>
      <p>I create things and stuff</p>
      <p>I create things and stuff.You can see all projects in my Github. Here are only the one(s) that are refactored or prepared for this website. They will be added as soon as they are ready</p>
      <Bug/>
  </div>
  <!-- <SocialMedia class="main__media"/> -->
</div> 

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
.construction{
  text-align: center;
}

/* include border and padding in element width and height */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  padding-top: 10px;
}

html,body{
   margin: 0;
  padding: 0;
  font-size: 62.5%;
  
}

h1{
  font-family: Kurale;
  text-align: center;
 /*  font-size: 14px;
  font-size: 5.4rem; */
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 1px;
  color: #c8882d;
}

.main__title{
  padding-top: 27px;
    min-height: 100vh; 
  display: flex;
  flex-direction: column;
 
  align-content: center;
  background:white;

}

.main__title{
  text-align: center;
  flex:4;
  align-self: center;
  vertical-align: middle;
  line-height: 90px; 
}

.main__media{
  flex:3;
  text-align: center;
}
/* .main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
} */

</style>
