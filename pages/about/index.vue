<template>
  <!-- <section class="about">
        <img class="about__image" :src="aboutPage.thumbnail">
      <div class="about__cards">

        <div class="about__single-card">
          <div class="about__front-card">Stacks</div>
          <div class="about__back-card"></div>
        </div>

        <div class="about__single-card">
          <div class="about__front-card">Other Me</div>
          <div class="about__back-card">
            <ul>
              <li>One</li>
              <li>One</li>
              <li>One</li>
            </ul>
          </div>
        </div>

        <div class="about__single-card">
          <div class="about__front-card">Random Stuff</div>
          <div class="about__back-card"></div>
        </div>

      </div>
  </section> -->


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
      <template v-slot:front>
        front
      </template>
      <template v-slot:back>
        back
      </template>
    </vue-flip>

    <vue-flip class="about__single-card" active-click width = "350px" height="450px">
      <template v-slot:front>
        front
      </template>
      <template v-slot:back>
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

<style>

.about__image{
  border-radius: 50%;
  height: 50px;

}

.about__cards{
  display:flex;
  justify-content: space-evenly;
 background-color: transparent;

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

.about__title{
  text-align: center;
  /* transform: rotate(-45deg); */
}



.front{
  background: red;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
 
}

.back{
  text-align: center;
  width: 100%;
  height: 100%;
  background: green;
}

/* .about__front-card .about__back-card{
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
} */


/* .about__cards:hover .about__single-card{
  transform: rotateY(180deg);
} */
</style>