<template lang="html">
  <section id="projects">
    <div class="page-preview" v-for="page in allPages">
      <div>
        <img class="page-preview-thumbnail" :src="page.thumbnail">
      </div>
      <h1><n-link :to="page._path">{{page.title}}</n-link></h1>
      <p class="project__excerpt">{{page.excerpt}}</p>
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

<style>
.project__excerpt{
  color:#20263F;
  font-family:'Inknut Antiqua', serif;
  font-weight: bold;
  margin:0;
}
#projects{
     padding-top:2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex:1;
    
    flex-wrap: wrap; 
  
}
 @media(min-width: 35rem){
    #projects{
        flex-direction: row;
    }
} 

h1{
  color:#C8882D;
  font-family: 'Inknut Antiqua', serif;
}


a{
    text-decoration: none;
    color:#c8882d;
    
}

.page-preview{
    border-radius:3px;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.5);
    width: 90%;
    height: 25rem;
    margin:1rem;
    text-align: center;
    background:#ECEEE5;
}

.page-preview-thumbnail{
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 10rem;
}

.page-preview-content{
    text-align: center;
    padding: 1rem;
}



@media(min-width: 35rem){
    .page-preview{
        width:25rem;
        
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