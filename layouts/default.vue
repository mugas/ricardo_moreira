<template>
  <div>
    <TheHeader/>
    <main class="main_content">
      <nuxt/>
    </main>
  </div>
</template> 

<script>

import TheHeader from '../components/TheHeader/TheHeader';

export default {
components:{
  TheHeader
 }  
}
</script>



<style lang="css" scoped>
*{
  box-sizing: border-box
}

body{
  font-family: "Lato", sans-serif
}

.main-content{
  margin-top: 4.5rem;
}
</style>
