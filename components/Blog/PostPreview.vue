<template>
<div class="main">
    <div class="posts-list" v-for="post in blogPosts">
      <p><n-link :to="post._path">{{title}}</n-link></p>
      <p>{{post.date}}</p>
      <p>{{excerpt}}</p>
      <div class="one">
      <img class="text" :src="thumbnailImage">
      </div>
      </div>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            required: true
        },
        excerpt:{
            type:String,
            required: true
        },
        thumbnailImage:{
            type: String,
            required:true
        },
        id:{
            type:String,
            required:true
        }
    }
}
</script>