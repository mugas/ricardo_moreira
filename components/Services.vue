<template>
  <section>
    <h1>Services</h1>
    <p>Your business needs digital presence and I can help you achieve it.</p>
    <div class="about__cards">
      <nuxt-link to="/contact">
        <section
          class="about__single-card"
          active-click
          width="350px"
          height="450px"
        >
          <div class="front">
            <img width="100px" src="~/assets/Svg/web.svg" />
            <h2>Web Development</h2>
            <p>
              I build digital products that are responsive, acessible and fast
            </p>

            <button>Get in touch</button>
          </div>
        </section>
      </nuxt-link>
      <nuxt-link to="/contact">
        <section class="about__single-card" width="350px" height="450px">
          <div class="front">
            <img width="100px" src="~/assets/Svg/digital.svg" />
            <h2>Digital Strategy and SEO</h2>
            <p>Engage your audience and reach your marketing goals</p>
            <button>Get in touch</button>
          </div>
        </section>
      </nuxt-link>
      <nuxt-link to="/contact">
        <section class="about__single-card" width="350px" height="450px">
          <div class="front">
            <img width="100px" src="~/assets/Svg/seo.svg" />
            <h2>Wordpress Development</h2>
            <p>I help you put your Wordpress website tailored for your needs</p>
            <button>Get in touch</button>
          </div>
        </section>
      </nuxt-link>
    </div>
  </section>
</template>

<style scoped>
h1 {
  color: #28430a;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

p {
  text-align: center;
}
.about__cards {
  /* padding-top: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-top: 30px; */
  align-items: center;
  align-content: space-between;
}
img {
  margin-top: 2rem;
}

button {
  text-transform: uppercase;
  background: transparent;
  text-decoration: none;
  padding: 20px;
  border-radius: 50px;
  display: inline-block;
  border: 2px white solid;
  border-radius: 16px;
}

a {
  color: #252525;
  text-decoration: none;
  /* box-shadow: inset 0 -1px 0 currentColor; */
  transition: color 80ms ease-in, box-shadow 130ms ease-in-out,
    -webkit-box-shadow 130ms ease-in-out;
}
/* a:hover {
  box-shadow: inset 0 0 0 currentcolor, 0 3px 0 currentcolor;
 
} */

.about__single-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-top: 30px;
  transition: 0.5s;
  position: relative;
  width: 350px;
  height: 450px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.about__cards >>> .front {
  background: #edbd54;
  height: 100%;
  width: 100%;
  box-shadow: 1px 1px 5px 1px rgb(200, 136, 45);
  border-radius: 16px;
}

.about__cards >>> .front:hover {
  background: #793000;
}

@media (min-width: 768px) {
  .about__cards {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
  }
}

@media (min-width: 1185px) {
  .about__cards {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
}

.front {
  text-align: center;
}
</style>
