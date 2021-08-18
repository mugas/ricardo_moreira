<template>
  <div class="social-icons">
    <!--     <a href="https://www.linkedin.com/in/ricardodmoreira/" target="_blank"
      ><font-awesome-icon :icon="['fab', 'linkedin']"
    /></a> -->
    <a href="https://github.com/mugas" target="_blank"
      ><font-awesome-icon :icon="['fab', 'github']"
    /></a>
    <a href="https://instagram.com/mugas_codes" target="_blank"
      ><font-awesome-icon :icon="['fab', 'instagram']"
    /></a>
    <a href="https://twitter.com/mugas11" target="_blank"
      ><font-awesome-icon :icon="['fab', 'twitter']"
    /></a>
    <!-- <a href="https://drive.google.com/open?id=1utKJsbWPrvlvP5UeFrkVBS8invpqmMoi" target="_blank"><font-awesome-icon :icon="['fas', 'file-pdf']"/></a> -->
    <p class="connect">Let's connect</p>
  </div>
</template>

<style scoped>
.social-icons {
  padding: 0;
  list-style: none;
  margin: 0;
  border-top: 2px #a64e43 solid;
  border-bottom: 2px #a64e43 solid;
}

.social-icons a {
  display: inline-block;

  position: relative;
  font-size: 1.25em;
  transition: all 265ms ease-out;
  color: #a64e43;
}

.social-icons a:hover:before {
  transform: scale(0);
  transition: all 265ms ease-in;
}

.social-icons a:hover {
  transform: scale(2.2);
}

.connect {
  margin: 0 0 1.15em 0;
  font-size: 1.25em;
  color: #a64e43;
  font-weight: bold;
}
</style>
