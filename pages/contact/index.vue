

<template>
    <div class="container">
        <h1 class="Title">Contact</h1>
        <div class="content">

<client-only>
<form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
</client-only>
        </div>
    </div>
</template>



<style lang="css" scoped>

*{
    box-sizing: border-box;
}

body{
  background:#92bde7;
  color:#485e74;
  line-height:1.6;
  padding:1em;
}

.container{
    max-width: 1170px;
    margin-left:auto;
    margin-right: auto;
    padding: 1em;
}

.content form{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}

.content form label{
    display: block;
}

.content form .full{
    grid-column: 1 / 3;
}

.content form input, .content form textarea{
    width: 100%;
    padding: 1em;
    border: 1px solid #c9e6ff;
}

.content form .form-button{
    background:#c9e6ff;
    border: 0;
    text-transform: uppercase;
}

.content form .form-button:hover, .content form .form-button:focus{
     background:#92bde7;
     color:#fff;
     outline:0;
     transition: background-color 2s ease-out;
}

@media (min-width: 700px){
    .content{
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    .content> *{
        padding: 2em;
    }
}



</style>