<template>
  <div>
    <div class="page-wrapper">
      <aside>
        <h1>Hi, I'm Ricardo</h1>
        <p class="bio">
          Let's <br />
          <span class="action"> {{ actions[0] }}</span>
        </p>
        <p class="name">Ricardo Moreira</p>
        <p>firstname.lastname@gscreations.io</p>
      </aside>
      <article>
        <div class="image">
          <img src="~/assets/images/me.png" />
        </div>
        <div class="text">
          <p>
            My name is Ricardo Moreira and I am a Web developer and
            entrepreneur. I was born in Portugal but I live in Finland with my
            wife and 2 daughters. As a web developer I created
            <a href="http://gscreations.io/"> Good Stuff Creations</a>.
          </p>
          <p>
            There I create web products focused on local producers and
            groceries, helping them to grow their presence online, with
            websites, and SEO.I love the passion local producers put in their
            products and I want to help them share their message to more people
            and sell more products.
          </p>
          <p>
            I also create tutorials about coding where hopefully I can help
            someone to learn something about coding. As a parent who had(has)
            day job was a challenge to find the time to code while have to work
            and spending time with the kids and wife, so I pretend to help any
            coding parent out there.
          </p>
          <p>
            Besides web development, I am passionated about food. It's where I
            have been working mostly all my life.I am creating now a new service
            that will focus on local producers and tasty food. More news coming
            soon.
          </p>
          <p>
            In this webpage you can get to know a bit more about my projects and
            also about other things that interest me like music, food and other
            subjects. Keep an eye on my
            <nuxt-link to="/blog"> Blog</nuxt-link> as I try to updated weekly.
            feel free to connect with me
            <nuxt-link to="/contact">here</nuxt-link> or with the
            <a href="https://twitter.com/mugas11">bluebird</a>
            for any question that may arise you.
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actions: ['Talk', 'Work', 'Connect'],
    }
  },
  mounted() {
    window.setInterval(() => {
      this.pollPerson()
    }, 5000)
  },
  methods: {
    pollPerson() {
      const first = this.actions.shift()
      this.actions = this.actions.concat(first)
    },
  },
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
}
a {
  color: #28430a;
}
a {
  margin: 0;
}

.name {
  margin-bottom: 0;
}
.action {
  color: #28430a;
  font-size: 11.5vw;
  filter: brightness(2);
}

.page-wrapper {
  display: block;
  width: 100%;
}

@media (min-width: 700px) {
  .page-wrapper {
    display: flex;
  }

  .action {
    color: #28430a;
    font-size: 3.5vw;
    filter: brightness(2);
  }
}
aside {
  background-color: #793000;
  color: white;
  display: flex;
  margin-top: 8%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 40px;
}

@media (min-width: 700px) {
  aside {
    background-color: #793000;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    flex: 0 0 50%;
    padding: 0;
  }
}
h1,
.flourish {
  font-size: 6vw;
  margin: 10px 0;
  font-family: 'Oxygen', sans-serif;
  text-align: center;
}

@media (min-width: 700px) {
  h1,
  .flourish {
    font-size: 4.5vw;
    margin: 20px 0;
    padding: 0 20px;
  }
}
h1 {
  letter-spacing: 10px;
  text-transform: uppercase;
}

.flourish {
  font-weight: bold;
}

.bio {
  margin: 0 20px;
  text-align: center;
  line-height: 1.5;
  font-style: italic;
}

@media (min-width: 1100px) {
  .bio {
    text-align: center;
    line-height: 1.7;
    margin-bottom: 1.6em;
    font-size: 1.2em;
  }
}
article {
  margin: 0;
}

@media (min-width: 700px) {
  article {
    flex: 0 0 50%;
    margin-left: 50%;
    padding-top: 30px;
  }
}
.author,
.photographer {
  text-transform: uppercase;
  font-size: 0.7em;
  letter-spacing: 1px;
  color: #777;
  padding: 0 20px;
  margin: 0;
  font-family: 'Oxygen', sans-serif;
}
.author span,
.photographer span {
  color: rgba(0, 0, 0, 0.4);
  text-transform: capitalize;
}

@media (min-width: 700px) {
  .author,
  .photographer {
    padding: 0 60px;
  }
}
.image img {
  width: 100%;
  height: 50%;
  margin: 20px 0;
}

.text {
  columns: 2;
  column-width: 250px;
  column-gap: 2em;
  padding: 0 20px;
  text-align: justify;
}
.text p:first-child {
  margin-top: 0;
}
.text p:first-child:first-letter {
  float: left;
  color: #793000;
  font-size: 4em;
  line-height: 35px;
  padding: 19px 10px 10px 0;
}

@media (min-width: 1100px) {
}
footer {
  height: 40px;
}
</style>
