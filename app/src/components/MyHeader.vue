<template>
  <div class="header-background">
    <div class="glitch-wrapper">
      <div class="glitch-intro" data-glitch-intro="Hi I'm">Hi I'm</div>
      <div class="glitch" data-glitch="Abdulqader">Abdulqader</div>
      <div class="glitch-footer" data-glitch-footer="A Software developer">
        A Software developer
      </div>
    </div>
    <canvas id="c"></canvas>
  </div>
  <div class="waveWrapper waveAnimation">
    <div class="waveWrapperInner bgTop">
      <div
        class="wave waveTop"
        style="
          background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png');
        "
      ></div>
    </div>
    <div class="waveWrapperInner bgMiddle">
      <div
        class="wave waveMiddle"
        style="
          background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png');
        "
      ></div>
    </div>
    <div class="waveWrapperInner bgBottom">
      <div
        class="wave waveBottom"
        style="
          background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png');
        "
      ></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("http://fonts.cdnfonts.com/css/do-futuristic");

.header-background {
  width: 100%;
  height: 400px;
}
@keyframes move_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}

.waveWrapperInner {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 456px;
  top: 0;
}
.bgTop {
  z-index: 15;
  opacity: 0.5;
}
#c {
  filter: blur(1px);
  top: 0;
  height: 500px;
  width: 100%;
  position: fixed;
  left: 0;
  z-index: -2;
}
.bgMiddle {
  z-index: 10;
  opacity: 0.75;
}
.bgBottom {
  z-index: 5;
}
.wave {
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
}
.waveTop {
  
  background-size: 50% 110px;
}
.waveAnimation .waveTop {
  animation: move-wave 3s;
  -webkit-animation: move-wave 3s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.waveMiddle {
  background-size: 50% 130px;
}
.waveAnimation .waveMiddle {
  animation: move_wave 10s linear infinite;
}
.waveBottom {
  
  background-size: 50% 110px;
}
.waveAnimation .waveBottom {
  animation: move_wave 15s linear infinite;
}
.glitch-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.glitch {
  position: fixed;
  font-size: 50px;
  font-weight: bold;
  line-height: 1.2;
  color: green;
  left: 50%;
  top: 200px;
  transform: translate(-50%);
  font-family: "DO Futuristic", sans-serif;
  letter-spacing: 5px;
  z-index: -1;
}

.glitch:before {
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: -2px;
  width: 100%;
  color: green;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-before 3s infinite linear alternate-reverse;
}

.glitch:after {
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: 2px;
  width: 100%;
  color: green;

  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-after 2s infinite linear alternate-reverse;
}

@keyframes noise-before {
  0% {
    clip: rect(61px, 9999px, 52px, 0);
  }

  5% {
    clip: rect(33px, 9999px, 144px, 0);
  }

  10% {
    clip: rect(121px, 9999px, 115px, 0);
  }

  15% {
    clip: rect(144px, 9999px, 162px, 0);
  }

  20% {
    clip: rect(62px, 9999px, 180px, 0);
  }

  25% {
    clip: rect(34px, 9999px, 42px, 0);
  }

  30% {
    clip: rect(147px, 9999px, 179px, 0);
  }

  35% {
    clip: rect(99px, 9999px, 63px, 0);
  }

  40% {
    clip: rect(188px, 9999px, 122px, 0);
  }

  45% {
    clip: rect(154px, 9999px, 14px, 0);
  }

  50% {
    clip: rect(63px, 9999px, 37px, 0);
  }

  55% {
    clip: rect(161px, 9999px, 147px, 0);
  }

  60% {
    clip: rect(109px, 9999px, 175px, 0);
  }

  65% {
    clip: rect(157px, 9999px, 88px, 0);
  }

  70% {
    clip: rect(173px, 9999px, 131px, 0);
  }

  75% {
    clip: rect(62px, 9999px, 70px, 0);
  }

  80% {
    clip: rect(24px, 9999px, 153px, 0);
  }

  85% {
    clip: rect(138px, 9999px, 40px, 0);
  }

  90% {
    clip: rect(79px, 9999px, 136px, 0);
  }

  95% {
    clip: rect(25px, 9999px, 34px, 0);
  }

  100% {
    clip: rect(173px, 9999px, 166px, 0);
  }
}

@keyframes noise-after {
  0% {
    clip: rect(26px, 9999px, 33px, 0);
  }

  5% {
    clip: rect(140px, 9999px, 198px, 0);
  }

  10% {
    clip: rect(184px, 9999px, 89px, 0);
  }

  15% {
    clip: rect(121px, 9999px, 6px, 0);
  }

  20% {
    clip: rect(181px, 9999px, 99px, 0);
  }

  25% {
    clip: rect(154px, 9999px, 133px, 0);
  }

  30% {
    clip: rect(134px, 9999px, 169px, 0);
  }

  35% {
    clip: rect(26px, 9999px, 187px, 0);
  }

  40% {
    clip: rect(147px, 9999px, 137px, 0);
  }

  45% {
    clip: rect(31px, 9999px, 52px, 0);
  }

  50% {
    clip: rect(191px, 9999px, 109px, 0);
  }

  55% {
    clip: rect(74px, 9999px, 54px, 0);
  }

  60% {
    clip: rect(145px, 9999px, 75px, 0);
  }

  65% {
    clip: rect(153px, 9999px, 198px, 0);
  }

  70% {
    clip: rect(99px, 9999px, 136px, 0);
  }

  75% {
    clip: rect(118px, 9999px, 192px, 0);
  }

  80% {
    clip: rect(1px, 9999px, 83px, 0);
  }

  85% {
    clip: rect(145px, 9999px, 98px, 0);
  }

  90% {
    clip: rect(121px, 9999px, 154px, 0);
  }

  95% {
    clip: rect(156px, 9999px, 44px, 0);
  }

  100% {
    clip: rect(67px, 9999px, 122px, 0);
  }
}
.glitch-intro {
  position: fixed;
  font-size: 40px;
  font-weight: bold;
  line-height: 1.2;
  color: #fff;
  left: 50%;
  top: 155px;
  transform: translate(-132%);
  font-family: "DO Futuristic", sans-serif;
  letter-spacing: 5px;
  z-index: -1;
}

.glitch-intro:before {
  content: attr(data-glitch-intro);
  position: absolute;
  top: 0;
  left: -2px;
  width: 100%;
  color: #fff;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-before 3s infinite linear alternate-reverse;
}

.glitch-intro:after {
  content: attr(data-glitch-intro);
  position: absolute;
  top: 0;
  left: 2px;
  width: 150%;
  color: #fff;

  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-after 2s infinite linear alternate-reverse;
}
.glitch-footer {
  position: fixed;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.2;
  color: #fff;
  left: 50%;
  white-space: nowrap;
  top: 260px;
  transform: translate(-51%);
  font-family: "DO Futuristic", sans-serif;
  letter-spacing: 5px;
  z-index: -1;
}

.glitch-footer:before {
  content: attr(data-glitch-footer);
  position: absolute;
  top: 0;
  left: -2px;
  width: 100%;
  color: #fff;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-before 3s infinite linear alternate-reverse;
}

.glitch-footer:after {
  content: attr(data-glitch-footer);
  position: absolute;
  top: 0;
  left: 2px;
  width: 100%;
  color: #fff;

  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-after 2s infinite linear alternate-reverse;
}
</style>