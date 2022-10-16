
<template>
<div
    class="ex ex-under"
  >
</div>
  <div
    class="ex"
  >
    <div class="ex-main">
      <h1 class="ex-title">Skills</h1>
    </div>
   <section class="customer-logos slider">
      <div class="slide"><img src="../assets/html-logo.png"></div>
      <div class="slide"><img src="../assets/css-logo.png"></div>
      <div class="slide"><img src="../assets/js-logo.png"></div>
      <div class="slide"><img src="../assets/ts-logo.png"></div>
      <div class="slide"><img src="../assets/php-logo.png"></div>
      <div class="slide"><img src="../assets/mysql-logo.png"></div>
       <div class="slide"><img src="../assets/python-logo.jpeg"></div>
      <div class="slide"><img src="../assets/symfony2-logo.png"></div>
      <div class="slide"><img src="../assets/vue-logo.png"></div>
      <div class="slide"><img src="../assets/github-logo.png"></div>
    
   </section>
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
      border-bottom: 0.25rem solid rgb(134 134 134);
      height: 100%;
      padding-bottom: 80px;
      padding-top: 40px;
      
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
  font-size: 70px;
}
.ex-main {
  background-color: rgba(255, 255, 255, 0);
    padding-bottom: 40px;

  padding-left: 10vw;
  padding-right: 10vw;
  text-align: left;
}

.slick-slide {
    margin: 0px 20px;
}

.slick-slide img {
    width: 75%;
    height: 75%;
    object-fit: cover;
}

.slick-slider
{
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
            user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
        touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}

.slick-list
{
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
.slick-list:focus
{
    outline: none;
}
.slick-list.dragging
{
    cursor: pointer;
    cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list
{
    -webkit-transform: translate3d(0, 0, 0);
       -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
         -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
}

.slick-track
{
    position: relative;
    top: 0;
    left: 0;
    display: block;
}
.slick-track:before,
.slick-track:after
{
    display: table;
    content: '';
}
.slick-track:after
{
    clear: both;
}
.slick-loading .slick-track
{
    visibility: hidden;
}

.slick-slide
{
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
}
[dir='rtl'] .slick-slide
{
    float: right;
}
.slick-slide img
{
    display: block;
}
.slick-slide.slick-loading img
{
    display: none;
}
.slick-slide.dragging img
{
    pointer-events: none;
}
.slick-initialized .slick-slide
{
    display: block;
}
.slick-loading .slick-slide
{
    visibility: hidden;
}
.slick-vertical .slick-slide
{
    display: block;
    height: auto;
    border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
    display: none;
}
</style>