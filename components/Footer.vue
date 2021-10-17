<template>
  <footer class="footer">
    <section class="name">
      &copy; Good Stuff Creations {{ new Date().getFullYear() }}
    </section>
    <SocialMedia />
  </footer>
</template>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  color: black;
}
a {
  display: inline-block;

  position: relative;
  font-size: 1.25em;
  transition: all 265ms ease-out;
  color: #a64e43;
}

@media (min-width: 768px) {
  .footer {
    display: flex;
    flex-direction: row;

    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    color: black;
  }
}
</style>
