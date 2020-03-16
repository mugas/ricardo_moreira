<template>
    <section class="container">
        <nuxt-link
        v-for="post in posts"
        :key="post.id"
        :to="post.id">
        <article class="post-preview">
            <div :style="{backgroundImage: post.thumbnailUrl}" class="post-preview-thumbnail">
            </div>
            <div class="post-preview-content">
                <h1>{{ post.title }}</h1>
                <p>{{ post.previewText }}</p>
            </div>
        </article>
        </nuxt-link>
    </section>
</template>

<script>
export default {
    data(){
        return{
            posts:[
                {
                    title:'A new Beginning',
                    previewText:'This will be awesome',
                    thumbnailUrl:'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    id:'a-new-beginning'
                },
                {
                    title:'A second Beginning',
                    previewText:'This will be even more awesome',
                    thumbnailUrl:'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    id:'a-second-beginning'
                }
            ]
        };
    }
    
}
</script>

<style>


</style>