<template>

<div class="spider">
  <div class="spiderweb"></div>
  <div class="body">
    <div class="eye left"></div>
    <div class="eye right"></div>
  </div>
  <div class="legs left">
    <div class="leg"></div>
    <div class="leg"></div>
    <div class="leg"></div>
  </div>
  <div class="legs right">
    <div class="leg"></div>
    <div class="leg"></div>
    <div class="leg"></div>
  </div>
</div>







</template>

<style>



.spider {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 30%;

  /* 4. Animatie */
  animation: swing 2s infinite;
  transform-origin: top;

  /* Bonus */
  transition: 0.8s ease-in-out;
}
.spiderweb{
 margin-top: -45px;
 height: 116px;
}


.spider .spiderweb {
  width: 2px;
  margin-left: 49px;
  background: red;
 

}

.spider .body {
  width: 100px;
  height: 80px;
  background: #222;
  position: relative;
  border-radius: 50%;
}

.spider .body .eye {
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 20px;
  background: #fff;
  border-radius: 50%;
}

.spider .body .eye.left {
  left: 20px;
}

.spider .body .eye.right {
  right: 20px;
}

.spider .body .eye:after {
  background: #222;
  width: 7px;
  height: 7px;
  content: "";
  display: block;
  margin: 55%;
  border-radius: 50%;

  /* 3. Animatie */
  animation: look 4s infinite;
}

.spider .legs .leg {
  width: 80px;
  height: 40px;
  margin-top: -20px;
  border: 5px solid transparent;
  border-top-color: #333;
  border-radius: 40px 40px 0 0;
}

.spider .legs {
  position: absolute;
  bottom: -10%;
  z-index: -1;
}

.spider .legs.left {
  left: -70%;
}
.spider .legs.right {
  right: -60%;
}

.legs.left .leg:nth-child(1) {
  transform: rotate(10deg);
  margin-left: 10px;
}
.legs.right .leg:nth-child(1) {
  transform: rotate(-10deg);
  margin-left: -10px;
}

.legs.left .leg:nth-child(2) {
  transform: rotate(-20deg);
  margin-left: 20px;
}
.legs.right .leg:nth-child(2) {
  transform: rotate(20deg);
  margin-left: -20px;
}

.legs.left .leg:nth-child(3) {
  transform: rotate(-50deg);
  margin-left: 30px;
}
.legs.right .leg:nth-child(3) {
  transform: rotate(50deg);
  margin-left: -30px;
}

/* 1. Animatie */
@keyframes look {
  0%,
  40%,
  100% {
    transform: translateX(0);
  }

  45%,
  95% {
    transform: translateX(-110%);
  }
}

/* 3. Animatie */
@keyframes swing {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }
}


</style>

