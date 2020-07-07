<template>
    <header class="main-header">
        <nav class="main-nav">
          <ul class="nav-links">
            <nuxt-link to="/about" tag="li" class="nav-link"><a>About</a></nuxt-link>
            <nuxt-link to="/" tag="li" class="nav-link"><a>Home</a></nuxt-link>
            <nuxt-link to="/blog" tag="li" class="nav-link"><a>Blog</a></nuxt-link>
            <nuxt-link to="/projects" tag="li" class="nav-link"><a>Projects</a></nuxt-link>
            <nuxt-link to="/contact" tag="li" class="nav-link"><a>Contact</a></nuxt-link>
          </ul>
        </nav>
    </header>  
</template>

<style lang="css" scoped>

.main-header {
    position : fixed;
    top:0;
    left:0;
    width: 100%;
    background: white;
    height: 4.5rem;
}

.main-nav{
    height:100%;
    display: flex;
    justify-content: center;
}

.nav-links{
    list-style: none;
    margin:0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.nav-link{
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    padding: 0;
}




.nav-link a{
display:block;/*takes the full height of the item */
text-decoration:none;
color:#20263F;
font-size: 17px;
}

.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active a {
color:#A64E43 ;
}

.nav-link.nuxt-link-exact-active{
    border-bottom: 3px solid #A64E43;
}

@media(min-width: 768px){
.nav-link a{
font-size: 24px;
}

.nav-link{
    padding: 0.3rem;
}
}

</style>