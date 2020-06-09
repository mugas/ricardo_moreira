<template>
  <section >
  <!-- <img class="about__image" :src="aboutPage.thumbnail"> -->

    <div class="about__cards">
 <vue-flip class="about__single-card" active-click width = "350px" height="450px">
    <template v-slot:front>
      <!-- <img class="about__image" :src="aboutPage.thumbnail"> -->
        <h1 class="about__title">Stacks</h1>
        <SocialMedia class="main__media"/>
      </template>
     
      <template v-slot:back>
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
        <!-- <img class="about__image" :src="aboutPage.thumbnail"> -->
        <h1 class="about__title">Other Me</h1>
        <SocialMedia class="main__media"/>
      </template>

      <template v-slot:back>
        <ul>
          <li>Entrepreneur</li>
          <li>Experience Hospitality</li>
          <li>Team Leader</li>
          <li>Love to cook</li>
          <li>Nuxt</li>
        </ul>
      </template>
    </vue-flip>

    <vue-flip class="about__single-card" active-click width = "350px" height="450px">
      <template v-slot:front class="front">
        <!-- <img class="about__image" :src="aboutPage.thumbnail"> -->
        <h1 class="about__title">About Me</h1>
        <SocialMedia class="main__media"/>
      </template>
      <template v-slot:back>
        <img class="about__image" :src="aboutPage.thumbnail">
        <p>My name is Ricardo. I am original from Portugal but live in Finland for almost 9 years now. </p>
      </template>
    </vue-flip>
    </div>

   
  </section> 
</template>



<script>
import Vueflip from 'vue-flip';
import SocialMedia from '../../components/SocialMedia/SocialMedia'


export default {
  components:{
'vue-flip':Vueflip,
SocialMedia
  },
  computed: {
    aboutPage() {
      return this.$store.state.aboutPage;
    },
    
}
}
</script>

<style scoped>
.about__cards{
  display:flex;
  justify-content: space-evenly;
}

.about__single-card{
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

.about__cards >>> .front{
  display: flex;
  flex-direction: column;
  background:#ECEEE5 ;
  height:100%;
  width: 100%;
  box-shadow: 1px 1px 5px 1px rgb(200,136,45);
  border-radius: 16px;
}

.about__cards >>> .back{
  display: flex;
  flex-direction: column;
  background:#ECEEE5 ;
  height:100%;
  width: 100%;
  box-shadow: 1px 1px 5px 1px rgb(200,136,45);
  border-radius: 16px;
}



.about__image{
   margin:2px auto;
  
  height: 50%;
  border-radius: 16px;  
}

h1{
 color:rgb(200,136,45);
 margin: 0 auto;
 font-size: 52px;
 font-family: 'Inknut Antiqua', serif;
}

ul{
  padding: 0;
}
li{
  list-style: none;
  font-size:23px;
  line-height: 3.5;
  color:#20263F;
  font-family: 'Inknut Antiqua', serif;
}
</style>