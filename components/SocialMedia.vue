<template>
  <nav>
    <ul class="social-media">
      <li>
        <a href="https://twitter.com/moreira_creates" target="_blank">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/gs_codes/" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
      </li>
      <li>
        <a href="https://github.com/mugas" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ricardodmoreira/" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
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
}

li :first-child {
  padding-left: 0;
}

.social-media {
  display: flex;
  padding-left: 0;
}
</style>
