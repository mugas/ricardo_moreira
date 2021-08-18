<template>
  <section>
    <h1>What I have been creating</h1>
    <div class="about__cards">
      <vue-flip
        class="about__single-card"
        active-click
        width="350px"
        height="450px"
      >
        <template v-slot:front>
          <h1 class="about__title">Good Stuff Creations</h1>
          <img class="gsfood" src="../../assets/Svg/gscoding.svg" />
        </template>

        <template v-slot:back>
          <p class="about__text">
            Good Stuff Creations is focused in web development. There I create
            web-apps focused local producers and groceries, helping them and
            their brand to grow digitally.
          </p>
          <p class="about__text">
            Can be a simple webpage or a more complex product, the point is that
            in the end, your product reaches more people more easily.
          </p>
          <p class="about__text">
            Because of my strong background in hospitality and passion for the
            business I can help you achieving the best strategy for it.
          </p>
          <SocialMediaCreations class="main__media" />
        </template>
      </vue-flip>

      <vue-flip
        class="about__single-card"
        active-click
        width="350px"
        height="450px"
      >
        <template v-slot:front>
          <h1 class="about__title">Good Stuff Foods</h1>
          <img class="gsfood" src="../../assets/Svg/gsfood.svg" />
        </template>

        <template v-slot:back>
          <p class="about__text">
            Still in development. The idea has been changing lately and in
            November 2020 I was in a program at the
            <a href="https://theshortcut.org/">Shortcut</a> to develop my idea.
          </p>
          <p class="about__text">
            It's focused in local products and sustainability but in a fun and
            tasty way. Feel free to contact me if you want to know more but I
            will keep you posted with updates here.
          </p>
        </template>
      </vue-flip>
    </div>
  </section>
</template>

<script>
import Vueflip from 'vue-flip'

export default {
  components: {
    'vue-flip': Vueflip,
  },
}
</script>

<style scoped>
.gsfood {
  width: 100px;
  align-self: center;
}
.about__cards {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
  align-content: space-between;
}

.about__single-card {
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

.about__cards >>> .front {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #eceee5;
  height: 100%;
  width: 100%;
  box-shadow: 1px 1px 5px 1px rgb(200, 136, 45);
  border-radius: 16px;
}

.about__cards >>> .back {
  display: flex;
  flex-direction: column;
  background: #eceee5;
  height: 100%;
  width: 100%;
  box-shadow: 1px 1px 5px 1px rgb(200, 136, 45);
  border-radius: 16px;
}

h1 {
  color: rgb(200, 136, 45);
  text-align: center;

  font-family: 'Inknut Antiqua', serif;
}

ul {
  padding: 0;
}

li {
  list-style: none;
  font-size: 23px;
  line-height: 3.5;
  color: #20263f;
  font-family: 'Inknut Antiqua', serif;
}

.about__image {
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

.about__what-now {
  line-height: 1.2;
  font-family: 'Inknut Antiqua', serif;
}

.about__margin-top {
  margin-top: 4rem;
}
.about__text {
  font-family: 'Inknut Antiqua', serif;
  line-height: 1.5;
}

.about__color-text {
  color: #a64e43;
  font-weight: bold;
}
.about__contact {
  color: #a64e43;
}

@media (min-width: 768px) {
  .about__cards {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
}
</style>
