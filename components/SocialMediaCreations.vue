<template>
  <nav>
    <ul class="social-media">
      <li>
        <a href="https://twitter.com/g_s_creations" target="_blank">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/gs_codes/" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
      </li>
      <li>
        <a href="http://gscreations.io/" target="_blank">
          <font-awesome-icon :icon="['fab', 'firefox']" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
li {
  list-style: none;
  text-decoration: none;
}

ul {
  list-style: none;
  text-decoration: none;
}

a {
  padding: 1rem;
  text-decoration: none;
  color: rgb(200, 136, 45);
}

li :first-child {
  padding-left: 0;
}

.social-media {
  display: flex;
  padding-left: 0;
  justify-content: center;
}
</style>
