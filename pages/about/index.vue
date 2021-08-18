<template>
  <Aboutpage />
</template>

<style scoped>
.about__cards {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
  align-content: space-between;
}

.about__single-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-top: 30px;
  transition: 0.5s;
  position: relative;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.about__cards >>> .front {
  display: flex;
  flex-direction: column;
  background: #eceee5;
  height: 100%;
  width: 100%;
  box-shadow: 1px 1px 5px 1px rgb(200, 136, 45);
  border-radius: 16px;
}

.about__cards >>> .back {
  display: flex;
  flex-direction: column;
  background: #eceee5;
  height: 100%;
  width: 100%;
  box-shadow: 1px 1px 5px 1px rgb(200, 136, 45);
  border-radius: 16px;
}

h1 {
  color: rgb(200, 136, 45);
  margin: 0 auto;
  font-size: 52px;
  font-family: 'Inknut Antiqua', serif;
}

ul {
  padding: 0;
}

li {
  list-style: none;
  font-size: 23px;
  line-height: 3.5;
  color: #20263f;
  font-family: 'Inknut Antiqua', serif;
}

.about__image {
  display: block;
  width: 150px;
  height: 150px;
  margin: 1em auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-border-radius: 99em;
  -moz-border-radius: 99em;
  border-radius: 99em;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);
}

.about__what-now {
  line-height: 1.2;
  font-family: 'Inknut Antiqua', serif;
}

.about__margin-top {
  margin-top: 4rem;
}
.about__text {
  font-family: 'Inknut Antiqua', serif;
  line-height: 1.5;
}

.about__color-text {
  color: #a64e43;
  font-weight: bold;
}
.about__contact {
  color: #a64e43;
}

@media (min-width: 768px) {
  .about__cards {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
}
</style>
