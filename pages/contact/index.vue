<template>
    <div class="form__title">
       <h1 class="Title">Contact</h1>
       <p>Let's have a chat</p>

<form 
  name="contactus" 
  method="post" 
  netlify
  netlify-honeypot="bot-field"
>
  <!-- // Hidden input to check for bots -->
  <input type="hidden" name="form-name" value="contactus" />
    <div  class="form__name">  
    <label for="name">Name:</label> 
      <input type="text" name="name" required />
    </div>
    <div class="form__contacts">
      <div class="form__email"> 
        <label for="email">Email:</label> 
        <input type="email" name="email" />
      </div>
      <div class="form__phone">
        <label for="Phone Number">Phone Number</label>
        <input type="text" name="Phone Number" required />
      </div>
    </div>
    
    <div class="form__textarea">
      <label for="message">Message</label> 
      <textarea name="message" required></textarea>
    </div>
    <button type="submit" value="Send message">Send</button>
</form>
    </div>
</template>



<style lang="css" scoped>

*{
    box-sizing: border-box;
}

body, html{
  background:#6A7B9C;
  color:#6A7B9C;
  line-height:1.6;
  padding:1em;
}

form{
  display: flex;
  flex-direction: column;
  align-items: center;
  width:650px;
  margin-left: 25%;
 
}

.form__name{
  width:100%;
  padding-bottom: 15px;
  margin-bottom: 10px;
  border:2px green solid;
  border-radius: 4px;
  background-color: #2d2d2d;
}

.form__name input{
  width: inherit;
  border:0;
  margin: 0;

  padding: 30px;
    border: 0;
    width: 100%;
    font-size: 1rem;
    background-color: #2d2d2d;
    color: white;
    border-radius: 4px;
}


.form__contacts{
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 15px;
  margin-bottom: 10px;

  
}

.form__contacts input{
  width: inherit;
  border:0;
  margin: 0;

  padding: 30px;
    border: 0;
    width: 100%;
    font-size: 1rem;
    background-color: #2d2d2d;
    color: white;
    border-radius: 4px;
}


.form__email{
  width:45%;
  border:2px green solid;
  background-color: #2d2d2d;
}

.form__email input{
 border:0;
 margin:0
}


.form__phone{
  width:45%;
  background-color: #2d2d2d;
}

.form__phone input{
border:0;
 margin:0
}

.form__textarea{
  width:100%;
  padding-bottom: 15px;
  margin-bottom: 10px;
  border-radius: 4px;

    background-color: #A64E43;
}

.form__textarea textarea{
  width: inherit;
  border: 0;
  margin: 0;

  padding: 30px;
    border: 0;
    width: 100%;
    font-size: 1rem;
    background-color: #A64E43;
    color: white;
    border-radius: 4px;
}



input,textarea:focus{
  outline: 0;
}


</style>