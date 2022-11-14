<template lang="html" class="homepage">
  <div>
    <header class="header">
      <h1 class="title">
        I create <span class="action">{{ actions[0] }} </span>and stuff
      </h1>
      <p class="subtitle">Developer, creator and constant learner</p>
      <NuxtLink to="/contact"
        ><button class="button__contact">Hire Me</button></NuxtLink
      >
    </header>
    <section class="stuff">
      <h2 class="projects">Projects</h2>
      <article class="websites">
        <div class="text">
          <h3>Good Stuff Creations</h3>
          <p class="websites__paragraph">
            Websites, landing pages, logos and more. Full service for the real
            estate business
          </p>
          <a class="gscreations__button" href="http://gscreations.io/">
            <button class="button__contact">Website</button></a
          >
          <p class="card__footer">Web development, Wordpress, SEO</p>
        </div>
        <div class="gscreations_image">
          <img src="~/assets/images/gscreations_mockup.png" />
        </div>
      </article>
      <article class="websites">
        <div class="text">
          <h3>Landing pages and Websites</h3>
          <p class="websites__paragraph">
            When a simple website or a landing page is more than enough, come
            this way.
          </p>
          <a
            class="gscreations__button"
            href="https://landingwebsites.carrd.co/"
          >
            <button class="button__contact">Website</button></a
          >
          <p class="card__footer">Landing Page, Carrd</p>
        </div>
        <div class="gscreations_image">
          <img src="~/assets/images/portfolio.png" />
        </div>
      </article>
      <article class="websites">
        <div class="text">
          <h3>Good Stuff Foods</h3>
          <p class="websites__paragraph">
            A new food experience. Eat the world locally. You can find more on
            the Instagram page (Planned for Autumn 2022)
          </p>
          <a
            class="gscreations__button"
            href="https://www.instagram.com/goodstuffoods/"
          >
            <button class="button__contact">IG Page</button></a
          >
          <p class="card__footer">Food, digital products</p>
        </div>
        <div class="gscreations_image">
          <img src="~/assets/images/insta.png" />
        </div>
      </article>
      <article class="websites">
        <div class="text">
          <h3>BizBox</h3>
          <p class="websites__paragraph">
            The platform to help you grow your business. Digital products that
            make me happy
          </p>
          <a class="gscreations__button" href="https://bizbox.club/">
            <button class="button__contact">Website</button></a
          >
          <p class="card__footer">Business, tools, templates, noCode</p>
        </div>
        <div class="gscreations_image">
          <img src="~/assets/images/bixboz_all.png" />
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      actions: [
        'Things',
        'Podcasts',
        'Websites',
        'Digital Products',
        'Blogs',
        'Code',
        'Courses',
      ],
    }
  },
  mounted() {
    window.setInterval(() => {
      this.pollPerson()
    }, 3000)
  },
  methods: {
    pollPerson() {
      const first = this.actions.shift()
      this.actions = this.actions.concat(first)
    },
  },
}
</script>

<style lang="css" scoped>
/*General*/

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  padding-top: 10px;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
/*Header*/

.header {
  display: flex;
  flex-direction: column;
  /* background-color: black; */
  margin-left: 2%;
  align-items: center;
  margin-right: 2%;
  height: 67vh;
  border: 10px;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
}

.title {
  font-size: 32px;
  overflow: hidden; /* content is not revealed until the animation */
  /*border-right: 0.09em solid #a64e43; The typwriter cursor */
  /* white-space: nowrap; Keeps the content on a single line */
  /* margin: 0 auto; Gives that scrolling effect as the typing happens */
  letter-spacing: 0.12em;

  line-height: 50px;
  padding-bottom: 32px;
  color: white;
}

.subtitle {
  padding-bottom: 8%;
  font-size: 18px;
  line-height: 26px;
  color: white;
  padding-bottom: 52px;
}
.action {
  color: #d45113;
}

button {
  border: 0;
  background: transparent;
  border-radius: 0;

  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  text-transform: inherit;
  background-color: white;
  color: #000;
  position: relative;
  z-index: 0;
  display: inline-block;
  overflow: hidden;
  font-size: 1rem;
  padding: 14.00778px 20px;
  border-radius: 2em;

  cursor: pointer;
  transition: all 0.5s;
}
button:hover {
  background-color: transparent;
  color: #793000;
  border: 2px solid #793000;
  font-size: 1rem;
}

button:active {
  background-color: transparent;

  border: 2px solid yellow;
  font-size: 1rem;
}
/*Other Projects*/

h2 {
  color: #793000;
  text-align: center;
  font-size: 28px;
  line-height: 50px;
  padding-bottom: 32px;
}
.button_gscreations {
  color: #793000;
  width: 20%;
}
.gscreations_image,
.gsfoods_image {
  display: none;
}
h3 {
  font-size: 26px;

  padding-bottom: 32px;
}
.stuff {
  display: flex;
  flex-direction: column;
}
.gsfoods_image {
  width: 10%;
}

.bizbox_paragraph {
  text-align: center;
  padding-bottom: 32px;
}
.card {
  display: flex;
  flex-direction: column;
  margin-right: 7%;
  /* height: 60vh; */
  border-radius: 10px;
  margin-bottom: 12%;
  margin-left: 7%;
}
.websites {
  color: #ffff;
  align-items: center;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
  display: flex;
  flex-direction: column;

  margin-right: 7%;
  /* height: 60vh; */
  border-radius: 10px;
  margin-bottom: 12%;
  margin-left: 7%;
}
.gscreations__button {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 5%;
}
.food {
  color: #ffff;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
}
.building {
  color: #ffff;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
}

.website__image {
  background-image: url('~assets/images/gsimage.jpg');
  width: 100%;
  background-repeat: no-repeat;
  background-position: right;
  height: 100%;
}

.websites__paragraph {
  padding-bottom: 32px;
  text-align: center;
}
.card__footer {
  text-align: center;
  position: relative;
  padding-bottom: 5%;
}

/*Animation*/

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 60%;
  }
}

/* The typewriter cursor effect */
@keyframes blinking {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #d45113;
  }
  100% {
    border-color: transparent;
  }
}

/*Media Queries*/

@media (min-width: 768px) {
  .projects {
    padding-top: 32px;
    font-size: 60px;
    padding-bottom: 32px;
  }
  .title {
    font-size: 67px;
    white-space: nowrap;
    animation: typing 6.5s steps(60, end), blinking 0.5s step-end infinite;
  }

  .header {
    height: 80vh;
    margin-left: 0;
    margin-right: 0;
    justify-content: space-around;
  }
  .subtitle {
    font-size: 40px;
  }

  .button__contact:hover {
    background-color: transparent;
    color: #d45113;
    border: 2px solid #d45113;
    font-size: 1rem;
  }
  .stuff {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 60px;

    justify-content: space-between;
  }
  .gsfoods_image {
    width: 50%;
  }

  .gscreations_image,
  .gsfoods_image {
    display: inherit;
  }

  .button_gscreations {
    padding: 10px;
    width: 200px;
  }
  .button_gscreations:hover {
    background-color: transparent;
    color: #d45113;
    border: 2px solid #d45113;
    font-size: 1rem;
  }

  .bizbox_paragraph {
    text-align: center;
    padding-bottom: 32px;
  }

  .website__image {
    margin-right: 22px;
  }
  img {
    width: 100%;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .button_gsfoods {
    width: 100%;
    /* margin-left: 10%;
    padding: 10px; */
  }
  .button_gsfoods:hover {
    background-color: transparent;
    color: #d45113;
    border: 2px solid #d45113;
    font-size: 1rem;
  }

  .websites__paragraph {
    font-size: 22px;
    max-width: 330px;
  }
  .websites {
    color: #ffff;
    background-color: #d45113;
    margin-left: 7%;
    margin-right: 7%;
    height: 67vh;
    margin-top: 5%;
    width: 100%;
    margin-bottom: 5%;
    display: flex;
    background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
    flex-direction: row;
  }
  h2 {
    margin: 0 auto;
  }
  .button__contact {
    width: 250px;
  }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
  .websites {
    flex-direction: column;
  }
}
</style>
