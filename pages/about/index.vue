<template>
  <section >
  <img class="about__image" :src="aboutPage.thumbnail">

    <div class="about__cards">
 <vue-flip class="about__single-card" active-click width = "350px" height="450px">
    <template v-slot:front>
        <p class="about__title">Stacks</p>
      </template>
     
      <template v-slot:back>
        <h4>My stacks</h4>
        <ul>
          <li>Javascript</li>
          <li>Css</li>
          <li>HTML</li>
          <li>Vue</li>
          <li>Nuxt</li>
        </ul>
      </template>
    </vue-flip>

    <vue-flip class="about__single-card" active-click width = "350px" height="450px">
      <template v-slot:front class="test">
        <p class="about__title">Other</p>
      </template>
      <template v-slot:front>
        back
      </template>
    </vue-flip>

    <vue-flip class="about__single-card" active-click width = "350px" height="450px">
      <template v-slot:front class="front">
        front
      </template>
      <template v-slot:back class="back">
        back
      </template>
    </vue-flip>
    </div>

   
  </section> 
</template>



<script>
import Vueflip from 'vue-flip';


export default {
  components:{
'vue-flip':Vueflip
  },
  computed: {
    aboutPage() {
      return this.$store.state.aboutPage;
    },
    
}
}
</script>

<style scoped>



.about__image{
  border-radius: 100%;
  height: 100px;
}

.about__cards{
  display:flex;
  justify-content: space-evenly;
  /* background-color: transparent; */
}

.about__single-card{
  border:1px red solid;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: 0.5s;
  position: relative;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

p{
 margin: 0;
 font-size: 125px;
 transform: rotate(-45deg);

}



/* .front{
  background: red;
} */

.back{
  text-align: center; 
  width: 100%;
  height: 100%;
  background: green;
}

front{
background: red;
  width: 100%;
  height: 100%;
  /* line-height: 448px; */
  text-align: center;
  vertical-align: middle;
 /*  display: flex;
  flex-direction: column;
  align-content: flex-end; */
}

.front{
background: blue;
  width: 100%;
  height: 100%;
  /* line-height: 448px; */
  text-align: center;
  vertical-align: middle;
 /*  display: flex;
  flex-direction: column;
  align-content: flex-end; */
}

v-slot.front{
 background: green; 
}

.test{
  background: pink;
}
</style>