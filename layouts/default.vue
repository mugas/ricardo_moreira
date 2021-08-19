<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <main class="main-content">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      displaySidenav: false,
    }
  },
}
</script>

<style lang="scss">
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Halant', sans-serif;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 6px;
  text-align: center;
  color: white;
}
body {
  color: #252525;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
}
// @import '../assets/scss/syntax.scss';
html {
  font-size: 20px;
  word-spacing: 1px;
}
html,
body {
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  widows: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
h1 {
  font-size: 2.4rem;
  // margin-top: 6rem;
  text-align: center;
  & + p {
    margin-top: 1.2rem;
  }
  @media (min-width: 1000px) {
    font-size: {
      width: 3.4rem;
    }
  }
}
h2 {
  font-size: 1.8rem;
  margin-top: 2rem;
  & + p {
    margin-top: 1rem;
  }
}
h3 {
  font-size: 1.5rem;
  margin-top: 1.8rem;
  & + p {
    margin-top: 1rem;
  }
}
h4 {
  font-size: 1.2rem;
  margin-top: 1.6rem;
  & + p {
    margin-top: 0.8rem;
  }
}
p {
  margin-top: 0;
  margin-bottom: 1.6rem;
  font-size: 1rem;
  line-height: 1.6;
}
a {
  color: #252525;
  text-decoration: none;
  // box-shadow: inset 0 -1px 0 currentColor;
  transition: color 80ms ease-in, box-shadow 130ms ease-in-out,
    -webkit-box-shadow 130ms ease-in-out;
}
ul {
  padding-left: 1rem;
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 0;
  margin-bottom: 1.6rem;
}
::-moz-selection {
  background: #e5e5e5;
}
::selection {
  background: #e5e5e5;
}
main {
  padding: 80px 0;
  @media (max-width: 567px) {
    padding: 64px 0;
  }
}
// Transitions
.fade-enter-active {
  animation: acrossIn 0.2s ease-out both;
  @media (max-width: 567px) {
    animation: none;
  }
}
.fade-leave-active {
  animation: acrossOut 0.2s ease-in both;
  @media (max-width: 567px) {
    animation: none;
  }
}
@keyframes acrossIn {
  0% {
    opacity: 0;
    transform: translateX(-64px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes acrossOut {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(64px);
  }
}
</style>
