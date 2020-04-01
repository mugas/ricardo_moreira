<template>
    <section id="posts">
       <PostPreview
       v-for="post in posts"
       :key="post.id"
       :title="post.title"
       :excerpt="post.previewText"
       :thumbnailImage="post.thumbnailUrl"
       :id="post.id" />
    </section>
</template>

<script>

import PostPreview from "../../components/Blog/PostPreview";
export default {

    components:{
PostPreview
    },
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
                },
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
                },
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

#posts{
    padding-top:2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
@media(min-width: 35rem){
    #posts{
        flex-direction: row;
    }
}
</style>