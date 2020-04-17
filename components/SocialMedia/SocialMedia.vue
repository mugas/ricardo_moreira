  <template>
  <div class="wrapper">
    <ul>
      <li class="linkedin">
        <a href="https://www.facebook.com/ruckwater/" target="_blank">
          <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
        </a>
      </li>
      <li class="twitter">
        <a href="https://twitter.com/ruckwater" target="_blank">
          <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
        </a>
      </li>
      <li class="instagram">
        <a href="https://www.instagram.com/ruckwater/?hl=pt" target="_blank">
          <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </div>
</template>


<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lato);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);
@import url(https://fonts.googleapis.com/css?family=Lato);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);

/* Let's style the wrapper in such away that, 
it should always be at the center of the browser */
.wrapper {
  /*  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px; */
  height: 70px;
  text-align: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
}

/* Style the Un-order list by setting its list-style to none */
.wrapper ul {
  list-style: none;
}

/* Style the list items inside the UL list, by setting its width, height and line-height 
  and float them to left and set its border and border-radius.
 */
.wrapper ul li {
  width: 75px;
  height: 75px;
  line-height: 75px;
  margin: 0 10px;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  transition: all 0.5s ease;
}

/* Style the icons by setting its color and margin-top value to 20px 
to align it properly */
.wrapper ul li .fa {
  color: #6f4d2a;
  margin-top: 20px;
  transition: all 0.5s ease;
}

/* Now target the specific li classes for styling and use box-shadow effect to border and text-shadow effect
  to icons for glowing effect and use transition property for smooth transition effect. */
/*facebook*/

.wrapper ul li:hover .fa-linkedin {
  color: #6f4d2a;
  text-shadow: 0 0 15px #3b5998;
  transition: all 0.5s ease;
}

/*twitter*/

.wrapper ul li:hover .fa-twitter {
  color: #6f4d2a;
  text-shadow: 0 0 15px #00aced;
  transition: all 0.5s ease;
}

/* instagram */

.wrapper ul li:hover .fa-instagram {
  color: #6f4d2a;
  text-shadow: 0 0 15px #bc2a8d;
  transition: all 0.5s ease;
}

/* media queries */

@media screen and (max-width: 640px) {
  .wrapper {
    width: 350px;
  }
  .wrapper ul li {
    margin-top: 10px;
  }
  .wrapper ul li.google {
    margin-left: 60px;
  }
}

@media screen and (max-width: 340px) {
  .wrapper {
    width: 150px;
  }
  .wrapper ul li {
    margin: 15px;
  }
  .wrapper ul li.google {
    margin-left: 15px;
  }
}
</style>
