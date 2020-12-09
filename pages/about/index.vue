<template>
  <section>
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
          <li>PHP</li>
        </ul>
      </template>
    </vue-flip>

    <vue-flip class="about__single-card" active-click width = "350px" height="450px">
      <template v-slot:front>
         <!-- <img class="about__image" :src="aboutPage.thumbnail">  -->
        <h1 class="about__title">About Me</h1>
        <SocialMedia class="main__media"/>
      </template>

      <template v-slot:back>
        <img class="about__image" :src="aboutPage.thumbnail">
        <p class="about__text">Hi, my name is Ricardo. I am a web developer living in Finland. Also I spent years in the hospitality business and led and helped teams to achieve success and had my share of entrepreneurship in different countries. Since 2018 I've been learning and working with web development and doing freelance on the side </p>
     
        
        
      </template>
    </vue-flip>

    <vue-flip class="about__single-card" active-click width = "350px" height="450px">
      <template v-slot:front class="front">
        <!-- <img class="about__image" :src="aboutPage.thumbnail"> -->
        <h1 class="about__title">What Now</h1>
        <SocialMedia class="main__media"/>
      </template>
      <template v-slot:back class="about__back">
        <p class="about__what-now about__margin-top">Nowadays I've been mostly working and learning more about front end development and search for the first opportunity to work in the area.<span class="about__color-text">If you have a job or project <nuxt-link to="/contact" class="about__contact">let's talk</nuxt-link> about it and make it happen</span></p>
        <p class="about__what-now">I write about front end development(but not only). You can read them on my website but also in <a href="https://dev.to/mugas">dev.to</a> and <a href="https://medium.com/@ricardo.d.moreira.rm">Medium</a>.</p> 
        <p class="about__what-now">Also I been planning my next business/app idea, but can't say more for now because it's still only an idea</p>
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
  padding-top:2rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
  align-content: space-between;
}

.about__single-card{
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-top: 30px;
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

.about__image{
  display: block;
  width: 150px;
  height: 150px;
  margin: 1em auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-border-radius: 99em;
  -moz-border-radius: 99em;
  border-radius: 99em;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);
}

.about__what-now{
  line-height: 1.2;
  font-family: 'Inknut Antiqua', serif;
}

.about__margin-top{
 margin-top: 4rem;
}
.about__text{
  font-family: 'Inknut Antiqua', serif;
  line-height: 1.5;
}

.about__color-text{
  color:#A64E43;
  font-weight: bold;
} 
.about__contact{
  color:#A64E43;
}

@media(min-width: 768px){
  .about__cards{
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
}
</style>