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

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Lato', sans-serif;
}
html,
body {
  margin: 0;
  padding: 0;
}

/* .main-content {
  margin-top: 4.5rem;
} */
</style>
