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
            My name is Ricardo Moreira and I am a web developer and
            entrepreneur. I was born in Portugal but I live in Finland with my
            wife and 2 daughters.
          </p>
          <p>
            The best part of it, as a developer and a person that loves grow a
            business, is that allows me to create different products and ideas.
          </p>
          <p>
            There for, I created
            <a href="https://www.gscreations.io/">GS Creations</a>. A product
            that gives a full service for the real estate business.
          </p>
          <p>
            One of my passions besides web development is food. It's where I
            have been working mostly all my life. So in my spare time, I am
            starting a digital theme food box, for food lovers. As testing, I am
            creating
            <a href="https://www.instagram.com/goodstuffoods/"> menus</a> that
            use mostly produces by local producers in Finland.
          </p>
          <p>
            Learning is growing. After hearing more and more about noCode
            platforms I decided to give it a go. With that I am creating
            templates, dashboards, e-books, and many.
          </p>
          <p>
            This year I decided that web 3.0 and all this new worls is something
            that I want to learn and try. So wait for it too see what I will be
            building with that
          </p>
          <p>
            Feel free to connect with me
            <nuxt-link to="/contact">here</nuxt-link> or with the
            <a href="https://twitter.com/moreira_creates">bluebird</a>
            for any question that may arise you or just join me in this ride.
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
  color: #d45113;
}
a {
  margin: 0;
}

.name {
  margin-bottom: 0;
}
.action {
  color: #000;
  font-size: 11.5vw;
  filter: brightness(2);
}

p {
  text-align: left;
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
    color: #000;
    font-size: 3.5vw;
    filter: brightness(2);
  }
}
aside {
  background-color: #d45113;
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
    background-color: #d45113;
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
  color: #d45113;
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
