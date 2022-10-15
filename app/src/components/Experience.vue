
<template>
<div
    class="ex ex-under"
  >
</div>
  <div
    class="ex"
  >
    <div class="ex-main">
      <h1 class="ex-title">Experience</h1>
    </div>

    <div class="logo-slider">
      <div class="logo-slide-track">
         <div class="slide">
          <img
            src="../assets/html-logo.png"
            alt=""
          />
        </div>
         <div class="slide">
          <img
            src="../assets/css-logo.png"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../assets/js-logo.png"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../assets/ts-logo.png"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../assets/php-logo.png"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../assets/mysql-logo.png"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../assets/python-logo.jpeg"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../assets/symfony2-logo.png"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../assets/vue-logo.png"
            alt=""
          />
        </div>
        <div class="slide">
          <img
          style="background-color:white;border:1px solid grey;border-radius:50%;"
            src="../assets/doctrine-logo.png"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../assets/github-logo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

/* Logo Slider */
.ex{
    background-color: rgba(0, 128, 0, 0.488);
      border-bottom: 0.25rem solid #025102;
      height: 350px;
}
.ex-under{
    position: absolute;
    z-index: -1;
    width: 100%;
    background-image: url("../assets/codebackground.jpg");
    background-size: cover;
    background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}
.ex-title {
  color: white;
  font-family: "Lobster", cursive;
  font-weight: 700;
  font-size: 60px;
}
.ex-main {
  background-color: rgba(255, 255, 255, 0);
  padding-top: 30px;
  padding-left: 10vw;
  padding-right: 10vw;
  text-align: center;
}
.logo-slider {
  background: rgba(0, 128, 0, 0);
  -webkit-box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0.125);
  box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0.125);
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.logo-slider::before,
.logo-slider::after {

  content: "";
  height: 175px;
  position: absolute;
  width: 200px;
  z-index: 2;
}

.logo-slider::after {
  right: 0;
  top: 0;
  -webkit-transform: rotateZ(180deg);
  transform: rotateZ(180deg);
}

.logo-slider::before {
  left: 0;
  top: 0;
}


.logo-slider .logo-slide-track {
  -webkit-animation: logo-scroll 60s linear infinite;
  animation: logo-scroll 60s linear infinite;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: calc(250px * 14);
  animation-duration: 30s;
  animation-iteration-count: infinite;
}
.slide img{
  width: 50px;
  height: 50px;
}
.logo-slider .slide {
  height: 150px;
  width: 250px;
  padding: 20px;
}

@-webkit-keyframes logo-scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    -webkit-transform: translateX(calc(-250px * 7));
    transform: translateX(calc(-250px * 7));
  }
}

@keyframes logo-scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    -webkit-transform: translateX(calc(-250px * 7));
    transform: translateX(calc(-250px * 7));
  }
}
</style>