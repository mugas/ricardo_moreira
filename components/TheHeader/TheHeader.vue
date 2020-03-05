<template>
    <header class="main-header">
        <nav class="main-nav">
        <ul class="nav-links">
        <nuxt-link to="/about" tag="li"><a>About</a></nuxt-link>
        <nuxt-link to="/" tag="li"><a>Blog</a></nuxt-link>
        </ul>
        </nav>
    </header>
</template>

<style lang="stylus" scoped>
.main-header{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    background: #022d30;
}
</style>