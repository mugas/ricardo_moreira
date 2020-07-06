<template>
    <div>
       <h1 class="form__title">Contact</h1>
       <p class="form__subtitle">Let's have a chat</p>

<form 
  name="contactus" 
  method="post" 
  netlify
  netlify-honeypot="bot-field"
>
  <!-- // Hidden input to check for bots -->
  <input type="hidden" name="form-name" value="contactus" />
    <div  class="form__name">  
    <label class="name" for="name">Name</label> 
      <input type="text" name="name" required />
    </div>
    <div class="form__contacts">
      <div class="form__email"> 
        <label for="email">Email</label> 
        <input type="email" name="email" required/>
      </div>
      <div class="form__phone">
        <label for="Phone Number">Phone Number</label>
        <input type="text" name="Phone Number" />
      </div>
    </div>
    
    <div class="form__textarea">
      <label for="message">Message</label> 
      <textarea name="message" required></textarea>
    </div>
    <button class="form__submit" type="submit" value="Send message">Send</button>
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

.form__title{
  font-size: 17px;
  font-family: 'Inknut Antiqua', serif;
  margin:0;
  color:#C8882D;
  text-align: center;
}

.form__subtitle{
  font-size: 16px;
  font-family: 'Inknut Antiqua', serif;
  padding:0;
  margin:0;
  color:#C8882D;
  text-align: center;
}



form{
   font-family: 'Inknut Antiqua', serif;
  display: flex;
  flex-direction: column;
  
  width:100%;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 4px;
  
 
}

.form__name{
  width:90%;
  padding-bottom: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #20263F;
}

.form__name input{
  width: inherit;
  border:0;
  margin: 0;
  /* padding: 13px; */
    border: 0;
    width: 100%;
    font-size: 1rem;
    background-color: #20263F;
    color: white;
    border-radius: 4px;
      padding: 1.3rem 30px 1rem 30px;
    top: 10px;
    left: 0;
}

.form__name label{
   padding: 1.3rem 30px 1rem 30px;
   font-size: 17px;
   position: relative;
    top: 10px;
    left: 0;
    color:#ECEEE5;
}


.form__contacts{
  display: flex;
  justify-content: space-between;
  width: 100%;
flex-direction: column;
  margin-bottom: 10px;
}

.form__contacts label{
  padding: 1.3rem 30px 1rem 30px;
  font-size: 17px;
   position: relative;
    top: 10px;
    left: 0;
    color:#ECEEE5;
}

.form__contacts input{
  width: inherit;
  border:0;
  margin: 0;
  padding: 1.3rem 30px 1rem 30px;
  border: 0;
  width: 100%;
  font-size: 1rem;
  background-color: #20263F;
  color: #ECEEE5;
  border-radius: 4px;
}


.form__email{
  width:90%;
  background-color: #20263F;
     border-radius: 4px;
     margin-bottom: 10px;
}

.form__email input{
 border:0;
 margin:0
}


.form__phone{
  width:90%;
  background-color: #20263F;
     border-radius: 4px;
}

.form__phone input{
border:0;
 margin:0
}

.form__textarea{
  width:90%;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #20263F;
   color: #ECEEE5;
}

.form__textarea textarea{
  width: inherit;
   font-family: 'Inknut Antiqua', serif;
  border: 0;
  margin: 0;
  width: 100%;
  padding: 1.3rem 30px 1rem 30px;
    border: 0;
    width: 100%;
  top: 10px;
    left: 0;
    line-height: 20px;
    background-color: #20263F;
     color: #ECEEE5;
    border-radius: 4px;
}

.form__textarea label{
   padding: 1.3rem 30px 1rem 30px;
   font-size: 17px;
   position: relative;
    top: 10px;
    left: 0;
}


input,textarea:focus{
  outline: 0;
}

.form__submit {
    width:48%;
    padding: 7px 35px;
    border-radius: 60px;
    display: inline-block;
    background-color: #20263F;
    color: #ECEEE5;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
              0 2px 10px 0 rgba(0,0,0,0.07);
    -webkit-transition: all 300ms ease;
    transition: all 300ms ease;
}

.form__submit:hover {
    transform: translateY(1px);
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
              0 1px 1px 0 rgba(0,0,0,0.09);
}

@media(min-width: 35rem){

form{
  font-family: 'Inknut Antiqua', serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:650px;
  margin-left: 25%;
  border-radius: 4px;
}

.form__contacts{
  display: flex;
  flex-direction: row;
  width: 100%;
  
  margin-bottom: 10px;
}

.form__textarea{
  width:100%;
}

.form__name{
  width:100%;
  padding-bottom: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #20263F;
}

.form__email{
     margin-bottom: 0px;
     width: 48%;
}
.form__phone{
  width: 48%;
}
}


</style>