<template lang="html">
  <section id="pages">
    <div class="page__preview" v-for="page in allPages">
      <div>
        <img class="page__thumbnail" :src="page.thumbnail">
      </div>
      <h2><n-link :to="page._path">{{page.title}}</n-link></h2>
      <p class="page__excerpt">{{page.excerpt}}</p>
      <p class="page__tag">{{page.about}}</p>
      </div>
  </section>
</template>

<script>
export default {
  computed: {
    allPages() {
      return this.$store.state.allPages;
    }
  }

};
</script>

<style scoped>



#pages{
    padding-top:2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex:1;
}

.page__preview{
    border-radius:3px;
    box-shadow: 1px 1px 5px 1px rgb(200,136,45);
    width: 90%;
    margin:1rem;
    text-align: center;
    background:#ECEEE5;
}

.page__thumbnail{
    background-position: 50%;
    background-size: cover;
    width: 100%;
    height: 10rem;
}
h2{
  color:#C8882D;
  font-family: 'Inknut Antiqua', serif;
  font-size-adjust: inherit;
}
a{
  text-decoration: none;
  color:#C8882D;
  font-size:large;
}

.page__excerpt{
  color:#20263F;
  font-family:'Inknut Antiqua', serif;
  font-weight: bold;
  margin:0;
}

.page__tag{
  margin:0;
  padding-bottom: 8px;
  font-style: italic;
}


 @media(min-width: 35rem){
    #pages{
      flex-direction: row;
      flex-wrap: wrap;
    }
    .page__preview{
      width:25rem;
    }
    a{
      text-decoration: none;
      font-size: inherit;
    }
} 


/* pre{
  background-color: #000;
  border: 1px solid red;
  color:white;
} */
 
/*  pre code {
  background-color: #000;
  border: 1px solid red;
  display: block;
  padding: 20px;
} */

/*  pre code .language-js{
  background: red;
} */

/* .language-js{
  width: 100%;
  color:red;
  background: black;
} */
</style>