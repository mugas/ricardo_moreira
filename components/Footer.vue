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
  color: #d45113;
}

@media (min-width: 768px) {
  .footer {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    padding: 0 30px 0 30px;
    justify-content: space-between;
    align-items: baseline;
    padding-top: 2rem;
    color: black;
  }
}
</style>
