<template lang="html">
  <section id="projects">
   <div class="page-preview" v-for="page in allPages">
      <img class="page-preview-thumbnail" :src="page.thumbnail">
      <h1><n-link :to="page._path">{{page.title}}</n-link></h1>
      <p>{{page.excerpt}}</p>
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

a{
    text-decoration: none;
    color:#c8882d;
    
}

.page-preview{
    border-radius:3px;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.5);
    width: 90%;
    height: 20rem;
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

h1{
  color:yellow;
}

@media(min-width: 35rem){
    .page-preview{
        width:25rem;
        
    }
}

 


</style>