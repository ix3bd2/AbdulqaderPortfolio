<template>
  <div class="About" id="AboutMain">
    <h1 class="About-title">About me</h1>
    <div class="row about-row">
      <div class="col-lg-6 col-sm-12 about-text">My name is Abdulqader Haritani (20). I'm an eager to learn, ambitious and hardworking individual, With some skills and experience in programming.
        I like to code, edit videos and play football/video games in my spare time. Because i have alot of spare time, i'm currently searching for 16 hours job during the week or 32 hours (Monday, Tuesday, Saturday and Sunday). i can speak Dutch, English and Arabic(first language)
      </div>
      <div class="col-lg-6 col-sm-12 pic-col" style="position: relative">
        <div class="border">
          <img class="about-pictures main-pic" src="../assets/portimg.jpeg" />
        </div>
        <img
          class="about-pictures sec-pic"
          src="https://a.storyblok.com/f/112937/568x464/82f66c3a21/all_the_english-_football_terms_you_need_to_know_blog-hero-low.jpg/m/620x0/filters:quality(70)/"
        />
        <img
          class="about-pictures thir-pic"
          src="https://imageio.forbes.com/specials-images/imageserve/61d6376afb41b047d0299df8/Video-Gamer-Mouse--Keyboard--Headphones-and-Controller/1960x0.jpg?format=jpg&width=960"
        />
        <img
          class="about-pictures four-pic"
          src="https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960"
        />
        <img
          class="about-pictures fi-pic"
          src="https://wallpapercave.com/wp/wp3304883.jpg"
        />
        <img
          class="about-pictures six-pic"
          src="https://www.focusphotography.ca/wp-content/uploads/2021/11/photo-1574717024653-61fd2cf4d44d.jpeg"
        />
        <img
          class="about-pictures sev-pic"
          src="https://www.creativosonline.org/wp-content/uploads/2013/12/tutorial-photoshop-como-aplica.jpg.webp"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

.About {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    overflow: hidden;
    height: 100%;
  margin-top: 30px;
  background-color: #1f1f1f;
  padding-top: 90px;
  padding-left: 10vw;
  padding-right: 10vw;
  color: white;
  font-family: "Lobster", cursive;
  text-align: start;
  border-bottom: 0.25rem solid rgb(134 134 134);

}
.About-title {
  font-weight: 700;
  font-size: 70px;
}
.about-row {
  width: 100%;
}
.pic-col {
  height: 50vw;
}
.about-pictures {
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
}

.main-pic {
  width: 18vw;
  height: 18vw;
  border-radius: 50%;
  z-index: 4;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.sec-pic {
  border: 2px solid green;
  width: 14vw;
  height: 14vw;
  left: 50%;
  top: 11.979vw;
  transform: translate(-168%);
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.thir-pic {
  border: 2px solid green;
  width: 14vw;
  height: 14vw;
  left: 50%;
  top: 11.979vw;
  transform: translate(+68%);
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.four-pic {
  border: 2px solid green;
  width: 14vw;
  height: 14vw;
  left: 50%;
  top: -2vw;
  transform: translate(-118%);
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.about-text{
  padding: 30px;
  padding-right: 4%!important;
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
}
.fi-pic {
  border: 2px solid green;
  width: 14vw;
  height: 14vw;
  left: 50%;
  top: -2vw;
  transform: translate(+18%);
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.six-pic {
  border: 2px solid green;
  width: 14vw;
  height: 14vw;
  left: 50%;
  top: 26.779vw;
  transform: translate(-118%);
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.sev-pic {
  border: 2px solid green;
  width: 14vw;
  height: 14vw;
  left: 50%;
  top: 26.779vw;
  transform: translate(+18%);
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.border {
  width: 18.4vw;
  padding: 3px;
  position: absolute;
  height: 18.4vw;
  left: 50%;
  top: 10.458vw;
  border: 1px solid green;
  border-radius: 50%;
  transform: translate(-50%);

}
@media (max-width: 500px) {
  .about-text{
padding-top: 30px;
  padding-bottom: 0px;
  padding-right: 0%!important;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px!important;
  }
  .About {
    height: 900px!important;
  }
}
@media (max-width: 800px) {
  .About {
    height: 1000px;
  }
  .about-text{
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 0%!important;
  font-family: 'Courier New', Courier, monospace;
  font-size: 17px;
}
  .about-row {
  width: 100%;
  height: 120vw;
}
  .border {
    width: 35.4vw;
    position: absolute;
    height: 35.4vw;
    left: 50%;
    top: 19.458vw;
    border: 0px solid gray;
    border-radius: 50%;
    transform: translate(-50%);
    overflow: hidden;
    background: linear-gradient(
      to right,
      rgb(237, 0, 0) 20%,
      rgb(231, 190, 9) 40%,
      #209b04 50%,
      #057c66 55%,
      rgb(111, 15, 159) 70%,
      #fff 100%
    );
    background-size: 200% auto;

    animation: shine 3s linear infinite;
  }
  .main-pic {
    width: 35vw;
    height: 35vw;
    border-radius: 50%;
    z-index: 4;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .sec-pic {
    border: 2px solid green;
    width: 25vw;
    height: 25vw;
    left: 50%;
    top: 22.979vw;
    transform: translate(-178%);
    z-index: 3;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .thir-pic {
    border: 2px solid green;
    width: 25vw;
    height: 25vw;
    left: 50%;
    top: 22.979vw;
    transform: translate(+78%);
    z-index: 3;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .four-pic {
    border: 2px solid green;
    width: 25vw;
    height: 25vw;
    left: 50%;
    top: -2vw;
    transform: translate(-118%);
    z-index: 3;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .fi-pic {
    border: 2px solid green;
    width: 25vw;
    height: 25vw;
    left: 50%;
    top: -2vw;
    transform: translate(+18%);
    z-index: 3;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .six-pic {
    border: 2px solid green;
    width: 25vw;
    height: 25vw;
    left: 50%;
    top: 51.179vw;
    transform: translate(-118%);
    z-index: 3;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .sev-pic {
    border: 2px solid green;
    width: 25vw;
    height: 25vw;
    left: 50%;
    top: 51.179vw;
    transform: translate(+18%);
    z-index: 3;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
}
</style>