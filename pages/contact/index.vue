<template>
    <div class="container">
       <h1 class="Title">Contact</h1>

<form 
  name="contactus" 
  
  method="post" 
  netlify
  netlify-honeypot="bot-field"
>
  <!-- // Hidden input to check for bots -->
  <input type="hidden" name="form-name" value="contactus" />
  <div>  
    <label for="name">Name:</label> 
    <input type="text" name="name" required/>
  </div>
  <div>
    <input type="email" name="email" required/>
    <label for="email">Email:</label>
  </div>
  <div>
    <textarea name="message" required></textarea>
    <label for="message">Message:</label>
  </div>
  <button type="submit" value="Send message">Send</button>
</form>


     <!--  <client-only class="content">
         <form name="form1" method="post" data-netlify=true>
          <label class="form-label" for="name">Name:</label>
          <input class="form-field" name="name" id="name" />
          <label class="form-label" for="email">Email:</label>
          <input class="form-field" name=email  id="email" />
          <label  class="form-label" for="message">Message:</label>
          <textarea class="form-field full" name="message" id="message"></textarea>
          <input name="submit" class="form-button full" type="submit" value="Send messsage" />
           <p>
    <button type="submit">Send</button>
  </p>
        </form>  
      </client-only> -->
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