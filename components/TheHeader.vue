<template>
  <div class="header-container">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <nuxt-link to="/">
          <img width="75px" src="~/assets/Svg/logo.svg" />
        </nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item buy-me-a-coffee">
            <a
              href="https://www.buymeacoffee.com/ricardomoreira"
              target="_blank"
              ><img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png"
                alt="Buy Me A Coffee"
                color="#793000"
            /></a>
          </li>
          <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/contact">Contact</nuxt-link></li>
          <!-- <li class="nav-item">
            <nuxt-link to="/projecs">Projects</nuxt-link>
          </li> -->
          <li class="nav-item"><nuxt-link to="/blog">Blog</nuxt-link></li>

          <li class="nav-item"><nuxt-link to="/coding">Coding</nuxt-link></li>
        </ul>
      </div>
      <nuxt-link to="/"
        ><img width="150px" src="~/assets/Svg/gs.svg" class="right-logo"
      /></nuxt-link>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from '@/components/Navigation/TheSideNavToggle'

export default {
  name: 'TheHeader',
  components: {
    TheSideNavToggle,
  },
}
</script>

<style scoped>
.header-container {
  height: 100px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  /* z-index: 100; */
  box-sizing: border-box;
  padding: 0 30px;
  margin-top: 10px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
  display: none;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

img {
  width: 75px;
}

.right-logo {
  width: 150px;
}

.right-logo {
  display: block;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
  .right-logo {
    display: none;
  }

  .logo {
    display: block;
  }

  img {
    width: 75px;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: black;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: #793000;
}

.buy-me-a-coffee a:hover,
.buy-me-a-coffee a:active,
.buy-me-a-coffee a.nuxt-link-active {
  color: red;
}
</style>
