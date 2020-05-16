<template lang="html">

  <div class="main">
<div class="construction">
    <h1>Sorry for the mess</h1>
    <h2>We are building something here</h2>
</div>
   <!--  <div class="main__title">
      <MySvg/>
      <h1>Looking for Me?</h1>
      <h2>I create things and stuff</h2>
      <Bug/>
    </div>
    <SocialMedia class="main__media"/>-->
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
  padding-top: 50px;
}

html,body{
   margin: 0;
  padding: 0;
  font-size: 62.5%;
  
}

h1{
  font-family: Kurale;
  font-size: 14px;
  font-size: 5.4rem;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 1px;
  color: #c8882d;
}

.main{
  padding-top: 27px;
    min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  align-items: stretch;
  align-content: center;
  background: white;

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
