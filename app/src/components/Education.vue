<template>
  <div class="educ" id="Educ">
    <h1 class="educ-title">Work & Education</h1>
    <div class="row about-experience__timeline">
      <div class="col-lg-6 col-sm-12 large-half tab-full" data-aos="fade-up">
        <div class="timeline">
          <div class="timeline__icon-wrap">
            <span class="timeline__icon timeline__icon--work"></span>
          </div>

          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div class="timeline__header">
              <p class="timeline__timeframe">March 2021 - June 2022</p>
              <h3 class="item-title">Amaze360</h3>
              <h5>Software developer</h5>
            </div>
            <div class="timeline__desc">
              <p>
                In my first full-time job, as a software developer. I worked closely with a team to create 360 escape-rooms. My direct contribution was in creating the API independently, and helping to build 3 online escape rooms.
              </p>
            </div>
          </div>

          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div class="timeline__header">
              <p class="timeline__timeframe">Feb 2019 - Feb 2021</p>
              <h3 class="item-title">Dirk</h3>
              <h5>Merchandiser</h5>
            </div>
            <div class="timeline__desc">
              <p>
                
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-sm-12 large-half tab-full" data-aos="fade-up">
        <div class="timeline">
          <div class="timeline__icon-wrap">
            <span class="timeline__icon timeline__icon--education"></span>
          </div>

          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div class="timeline__header">
              <p class="timeline__timeframe">Sep 2022 - Present</p>
              <h3 class="item-title">The Hague University of Applied Sciences (Software Engineering)</h3>
              <h5>Bachelor Degree</h5>
            </div>
            <div class="timeline__desc">
              <p>
                I'm studying at The Hague University because i want learn new programming languages and frameworks. Bachelor degree should also help me in the future.
              </p>
            </div>
          </div>

          <div class="timeline__block">
            <div class="timeline__bullet"></div>
            <div class="timeline__header">
              <p class="timeline__timeframe">July 2019 - June 2022</p>
              <h3 class="item-title">ROC Mondriaan (Web Development)</h3>
              <h5>MBO4 Degree</h5>
            </div>
            <div class="timeline__desc">
              <p>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.educ {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  background-color: #1f1f1f;
  padding-top: 90px;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-bottom: 90px;

  border-bottom: 0.25rem solid rgb(134 134 134);
}
.educ-title {
  color: white;
  font-family: "Lobster", cursive;
  text-align: start;
  font-weight: 700;
  font-size: 70px;
  padding-bottom: 90px;
}
.about-experience__timeline {
  margin-top: 1.6rem;
}

.about-experience__timeline .column:first-child {
  padding-right: 40px;
}

.about-experience__timeline .column:last-child {
  padding-left: 40px;
}

.timeline {
  padding-top: 4.8rem;
  position: relative;
  color: white;
}

.timeline::before {
  content: "";
  display: block;
  width: 1px;
  height: 100%;
  background-color: rgba(252, 251, 251, 0.673);
  position: absolute;
  left: 0;
  top: 0;
}

.timeline::after {
  content: "";
  display: block;
  width: 5.6rem;
  height: 1px;
    background-color: rgba(252, 251, 251, 0.673);

  position: absolute;
  left: 1px;
  top: 0;
}

.timeline__icon-wrap {
  display: block;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
    background-color: rgba(252, 251, 251, 0.673);

  position: absolute;
  top: -2.2rem;
  left: 5.6rem;
}

.timeline__icon {
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  position: absolute;
  left: 50%;
  top: 50%;
}

.timeline__icon--work {
    filter: invert(28%) sepia(54%) saturate(2341%) hue-rotate(95deg) brightness(97%) contrast(102%);
  background-image: url(../assets/work-icon.svg);
}

.timeline__icon--education {
    filter: invert(28%) sepia(54%) saturate(2341%) hue-rotate(95deg) brightness(97%) contrast(102%);
  background-image: url(../assets/educ-icon.svg);
}

.timeline__block {
  position: relative;
  padding-left: 5.6rem;
  padding-bottom: 0.8rem;
  margin-top: 2.8rem;
  min-height: 25.6rem;
}

.timeline .timeline__block:last-child {
  padding-bottom: 0;
}

.timeline__bullet {
  content: "";
  display: block;
  width: 3px;
  height: 4.8rem;
  background-color: green;
  position: absolute;
  left: -1px;
  top: 8px;
}

.timeline__header {
  margin-bottom: 3.2rem;
}

.timeline__header .timeline__timeframe,
.timeline__header h5 {
  font-family: "Roboto", sans-serif;
}

.timeline__header .timeline__timeframe {
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.714;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  margin-bottom: 0.8rem;
  color: green;
}

.timeline__header h3 {
  margin-bottom: 0;
}

.timeline__header h5 {
  font-size: 2.1rem;
  font-weight: 400;
  line-height: 1.333;
  margin-top: 0;
}

/* ------------------------------------------------------------------- 
 * responsive:
 * about
 * ------------------------------------------------------------------- */
@media screen and (max-width: 1200px) {
  .s-about {
    padding-top: 17.2rem;
    padding-bottom: 15.6rem;
  }

  .about-experience__timeline .column:first-child {
    padding-right: 30px;
  }

  .about-experience__timeline .column::last-child {
    padding-left: 30px;
  }

  .timeline::after {
    width: 4.4rem;
  }

  .timeline__icon-wrap {
    left: 4.4rem;
  }

  .timeline__block {
    padding-left: 4.4rem;
  }

  .timeline__header h5 {
    font-size: 1.8rem;
  }
}

@media screen and (max-width: 1024px) {
  .about-me__text {
    column-gap: 40px;
  }

  .about-me__buttons .column:first-child {
    padding-right: 20px;
  }

  .about-me__buttons .column:last-child {
    padding-left: 20px;
  }

  .about-experience__timeline .column:first-child {
    padding-right: 16px;
  }

  .about-experience__timeline .column:last-child {
    padding-left: 16px;
  }
}

@media screen and (max-width: 900px) {
  .s-about .row {
    max-width: 700px;
  }

  .about-me__buttons .column:first-child {
    padding-right: 16px;
  }

  .about-me__buttons .column:last-child {
    padding-left: 16px;
  }

  .about-experience__timeline .column {
    -webkit-flex: 0 0 100%;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  .about-experience__timeline .column:first-child {
    margin-bottom: 9.6rem;
  }

  .timeline::after {
    width: 5.6rem;
  }

  .timeline__icon-wrap {
    left: 5.6rem;
  }

  .timeline__block {
    min-height: 0;
    padding-left: 5.6rem;
  }
}

@media screen and (max-width: 800px) {
  .s-about {
    padding-top: 16rem;
  }

  .s-about .row {
    max-width: 600px;
  }
}

@media screen and (max-width: 600px) {
  .about-me__buttons .column:first-child,
  .about-experience__timeline .column:first-child {
    padding-right: 10px;
  }

  .about-me__buttons .column:last-child,
  .about-experience__timeline .column:last-child {
    padding-left: 10px;
  }

  .timeline::after {
    width: 4.4rem;
  }

  .timeline__icon-wrap {
    left: 4.4rem;
  }

  .timeline__block {
    padding-left: 4.4rem;
  }

  .timeline__header h5 {
    font-size: 1.8rem;
  }
}

@media screen and (max-width: 400px) {
  .s-about > [class*="about-"] {
    margin-bottom: 14rem;
  }

  .about-me__buttons .column:first-child,
  .about-experience__timeline .column:first-child {
    padding-right: 0;
  }

  .about-me__buttons .column:last-child,
  .about-experience__timeline .column:last-child {
    padding-left: 0;
  }

  .timeline::after {
    width: 2.8rem;
  }

  .timeline__icon-wrap {
    left: 2.8rem;
  }

  .timeline__block {
    padding-left: 2.8rem;
  }
}
</style>