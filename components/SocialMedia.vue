<template>
  <nav>
    <ul class="social-media">
      <li>
        <a href="https://twitter.com/moreira_creates" target="_blank">
          <fa :icon="['fab', 'twitter']" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/gs_codes/" target="_blank">
          <fa :icon="['fab', 'instagram']" />
        </a>
      </li>
      <li>
        <a href="https://github.com/mugas" target="_blank">
          <fa :icon="['fab', 'github']" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ricardodmoreira/" target="_blank">
          <fa :icon="['fab', 'linkedin']" />
        </a>
      </li>
      <li>
        <a href="https://linktr.ee/goodscreations" target="_blank">
          <fa :icon="['fa', 'user']" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
li {
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
