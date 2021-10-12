<template lang="html" class="homepage">
  <div>
    <header class="header">
      <h1 class="title">
        I create <span class="action">{{ actions[0] }} </span>and stuff
      </h1>
      <p class="subtitle">Developer, entrepreneur and constant learner</p>
      <NuxtLink to="/contact"
        ><button class="button__contact">Let's Work together</button></NuxtLink
      >
    </header>
    <section class="stuff">
      <h2>Projects</h2>
      <article class="websites card">
        <div class="text">
          <h3>Good Stuff Creations</h3>
          <p class="websites__paragraph">
            Website and digital products for local producers and groceries
          </p>
          <a class="gscreations__button" href="http://gscreations.io/">
            <button class="button_gscreations">Website</button></a
          >
          <p class="card__footer">Web development, Wordpress, SEO</p>
        </div>
      </article>
      <article class="food card">
        <h3>Good Stuff Foods</h3>
        <p class="websites__paragraph">Planned for 2022</p>
        <p class="websites__paragraph">
          A new food experience. Eat the world locally. You can find more on the
          Instagram page
        </p>
        <a
          class="gscreations__button"
          href="https://www.instagram.com/goodstuffoods/"
        >
          <button class="button_gscreations">IG Page</button></a
        >
      </article>
      <article class="building card">
        <h3>BizBox</h3>
        <p class="websites__paragraph">End of 2021</p>
        <p class="bizbox_paragraph">
          A business dashboard made for solopreneurs, content creators and
          Shopify entrepreneurs
        </p>
        <a class="gscreations__button" href="https://bizbox.club/">
          <button class="button_gscreations">Website</button></a
        >
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
  margin-left: 5%;
  padding-bottom: 8%;
  font-size: 18px;
  line-height: 26px;
  color: white;
  padding-bottom: 52px;
}
.action {
  color: yellow;
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
  color: yellow;
  border: 2px solid yellow;
  font-size: 1rem;
  width: 59%;
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
  width: 60%;
}

h3 {
  font-size: 26px;

  padding-bottom: 32px;
}
.stuff {
  display: flex;
  flex-direction: column;
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
    border-color: #a64e43;
  }
  100% {
    border-color: transparent;
  }
}

/*Media Queries*/

@media (min-width: 768px) {
  .title {
    font-size: 67px;
    white-space: nowrap;
    animation: typing 6.5s steps(60, end), blinking 0.5s step-end infinite;
  }
  h3 {
    margin-left: 10%;
  }
  .header {
    height: 80vh;
    margin-left: 0;
    margin-right: 0;
    justify-content: space-around;
  }
  .subtitle {
    font-size: 31px;
  }

  .button__contact:hover {
    background-color: transparent;
    color: #793000;
    border: 2px solid #793000;
    font-size: 1rem;
  }
  .stuff {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 162vh;
    justify-content: space-between;
  }
  .card__footer {
    top: 113px;
    margin-left: 10%;
  }
  .button_gscreations {
    margin-left: 10%;
    padding: 10px;
  }
  .button_gscreations:hover {
    background-color: transparent;
    color: #793000;
    border: 2px solid #793000;
    font-size: 1rem;
  }
  .websites {
    display: flex;
    color: #ffff;
    margin-left: 2%;
    margin-right: 2%;
    background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
    flex-direction: row;
  }
  .food {
    color: #ffff;
    background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
    display: flex;
    width: 35%;
    flex-direction: column;
  }
  .building {
    color: #ffff;
    background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
    display: flex;
    width: 35%;
    flex-direction: column;
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

    width: 100%;
  }

  .button_gsfoods {
    width: 100%;
    /* margin-left: 10%;
    padding: 10px; */
  }
  .button_gsfoods:hover {
    background-color: transparent;
    color: #28430a;
    border: 2px solid #28430a;
    font-size: 1rem;
  }

  .food__text {
    display: flex;
    flex-direction: column;

    width: 100%;
  }
  .websites__paragraph {
    margin-left: 10%;
    font-size: 22px;
  }
  .websites {
    color: #ffff;
    background-color: #edbd54;
    margin-left: 7%;
    margin-right: 7%;
    height: 67vh;
    width: 100%;
    margin-bottom: 5%;
  }
  h2 {
    margin: 0 auto;
  }
}
</style>
