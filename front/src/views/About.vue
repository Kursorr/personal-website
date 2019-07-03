<template>
  <div class="container">
    <h1><span class="initials">s</span>enechal <span class="initials">m</span>axime</h1>

    <hr>

    <div id="aboutMe">
      <div class="outContent">
        <div class="content">
          <div id="prensentation">

            <img
              :src="require(`@/assets/img/portrait/` + actualImg)"
              alt="portrait" id="portrait"
              @mouseover="changeImg()">

            <div id="all">
              <h1>{{ $t('about-title') }}</h1>
              <p>
                {{ $t('about-rightplace') }}<br/>
                {{ $t('about-me') }}
              </p>
            </div>
          </div>

          <hr class="in">

          <section id="skills">
            <section class="skill">
              <div class="webdesign"></div>
              <section class="text">
                <h2>Webdesign</h2>
                <p>{{ $t('about-webdesign-skill-text') }}</p>
                <section class="competences">
                  <div class="capacity">
                    <span>ui</span>
                  </div>
                  <div class="capacity">
                    <span>ux</span>
                  </div>
                  <div class="capacity">
                    <span>{{ $t('about-webdesign-skill-ergo') }}</span>
                  </div>
                  <div class="capacity">
                    <span>photoshop</span>
                  </div>
                </section>
              </section>
            </section>
            <section class="skill">
              <div class="frontend"></div>
              <section class="text">
                <h2>{{ $t('about-front-end-skill-title') }}</h2>
                <p>{{ $t('about-front-end-skill-text') }}</p>
                <section class="competences">
                  <div class="capacity">
                    <span>html5</span>
                  </div>
                  <div class="capacity">
                    <span>css3</span>
                  </div>
                  <div class="capacity">
                    <span>javascript</span>
                  </div>
                  <div class="capacity">
                    <span>vuejs 3</span>
                  </div>
                  <div class="capacity">
                    <span>angular 7</span>
                  </div>
                </section>
              </section>
            </section>
            <section class="skill">
              <div class="backend"></div>
              <section class="text">
                <h2>{{ $t('about-back-end-skill-title') }}</h2>
                <p>
                  {{ $t('about-back-end-skill-text') }}
                </p>
                <section class="competences">
                  <div class="capacity">
                    <span>nodejs</span>
                  </div>
                  <div class="capacity">
                    <span>php</span>
                  </div>
                  <div class="capacity">
                    <span>api</span>
                  </div>
                </section>
              </section>
            </section>
            <section class="skill">
              <div class="best-practice"></div>
              <section class="text">
                <h2>{{ $t('about-best-practice-skill-title') }}</h2>
                <p>
                  {{ $t('about-best-practice-skill-text') }}
                </p>
                <section class="competences">
                  <div class="capacity">
                    <span>npm</span>
                  </div>
                  <div class="capacity">
                    <span>git</span>
                  </div>
                  <div class="capacity">
                    <span>w3c</span>
                  </div>
                  <div class="capacity">
                    <span>reddit</span>
                  </div>
                </section>
              </section>
            </section>
          </section>

          <hr class="in">

          <section id="exp-and-graduation">
            <section id="experiences">
              <h1>{{ $t('about-experience') }}</h1>
              <hr class="inside">
              <section class="exp">
                <p>
                  <span class="business">Traveljuice</span> -
                  <span class="job">
                    {{ $t('about-traveljuice-job') }}
                  </span><br>
                  <span class="date">
                    {{ $t('about-traveljuice-date') }}
                  </span>
                </p>
              </section>
              <section class="exp">
                <p>
                  <span class="business">YachtSupply</span> -
                  <span class="job">
                    {{ $t('about-yachtsupply-job') }}
                  </span><br>
                  <span class="date">
                    {{ $t('about-yachtsupply-date') }}
                  </span>
                </p>
              </section>
              <section class="exp">
                <p>
                  <span class="business">NETexcom</span> -
                  <span class="job">
                    {{ $t('about-netexcom-job') }}
                  </span><br>
                  <span class="date">
                    {{ $t('about-netexcom-date') }}
                  </span>
                </p>
              </section>

              <section class="exp">
                <p>
                  <span class="business">What's Up Informatique</span> -
                  <span class="job">
                    {{ $t('about-whatsup-job') }}
                  </span><br>
                  <span class="date">
                    {{ $t('about-whatsup-date') }}
                  </span>
                </p>
              </section>
            </section>

            <section id="graduates">
              <div class="dipl"></div>
              <h1>{{ $t('about-degree-title') }}</h1>
              <hr class="inside">
              <section class="graduate">
                <p>
                  <span class="school">
                    Supinfo International University
                  </span><br>
                  <span class="g">
                    Associate of Science (BAC +2)
                  </span> -
                  <span class="year">2017</span>
                </p>
              </section>
              <section class="graduate">
                <p>
                  <span class="school">
                    Greta
                  </span><br>
                  <span class="g">
                    {{ $t('about-degree-greta') }}
                  </span> -
                  <span class="year">2014</span>
                 </p>
              </section>
            </section>
          </section>

          <a href="/CV.pdf" class="btn download" download>
            {{ $t('about-download-cv') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class About extends Vue {
    public portraits = [
      'anger.png',
      'ascendant.png',
      'barbarian.png',
      'beaten.png',
      'class.png',
      'cyberpunk.png',
      'determined.png',
      'happy.png',
      'neutral.png',
      'sadness.png',
      'saiyan.png',
      'smirk.png',
      'triggered.png',
    ]
    actualImg = this.portraits[7]

    generateNumber () {
      return Math.floor(Math.random() * 13)
    }

    changeImg() {
      const index = this.generateNumber()
      this.actualImg = this.portraits[index]
    }

  }
</script>

<style lang="scss">
  @import "../assets/style/variables.scss";

  .btn.download {
    width: 200px;
    margin: 0 auto 50px;
  }

  .container {
    margin-top: 100px;

    h1 {
      font-family: 'Allerta Stencil', sans-serif;
      text-transform: uppercase;
      text-align: center;
    }

    div#prensentation {
      display: flex;
      justify-content: space-evenly;

      #portrait {
        height: 300px;
        border-radius: 50%;
        border: solid #F2F2F2 1px;

        &:hover {
          border-color: #F7E0CC;
        }
      }

      div#all {
        width: 42%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
          font-size: 16px;
          margin-bottom: 10px;
        }
      }

      p {
        line-height: 32px;
        text-align: justify;
        padding-left: 25px;
      }
    }
  }


  // Skill section

  section#skills {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    div.webdesign {
      background-image: url('../assets/img/spritesheet.png');
      background-position: 0 -168px;
    }

    div.frontend {
      background-image: url('../assets/img/spritesheet.png');
      background-position: -84px -84px;
    }

    div.backend {
      background-image: url('../assets/img/spritesheet.png');
      background-position: -84px 0;
    }

    div.best-practice {
      background-image: url('../assets/img/spritesheet.png');
      background-position: 0 -84px;
    }

    section.skill {
      display: flex;
      width: 453px;
      flex-wrap: wrap;

      &:nth-child(1), &:nth-child(2) {
        margin-bottom: 30px;
      }

      @media only screen and (max-width: 908px) {
        &:nth-child(3) {
          margin-bottom: 30px;
        }
      }

      div {
        height: 84px;
        width: 84px;
        margin-right: 15px;
      }

      section.text {
        width: 70%;
        line-height: 25px;

        h2 {
          text-align: left;
        }

        section.competences {
          display: flex;

          div.capacity {
            text-align: center;
            color: #fff;
            padding: 0 7px;
            background-color: #e59a58;
            border-radius: 4px;
            margin-top: 2px;
            margin-right: 10px;
            height: 25px;
          }
        }
      }
    }
  }

  // Exp and Graduation Section

  section#exp-and-graduation {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-bottom: 50px;

    // media query here

    section#experiences > h1, section#graduates > h1 {
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
      text-align: center;
      margin-top: 15px;
    }

    section#experiences {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 430px;
      border-radius: 4px;

      @media only screen and (max-width: $lg-breakpoint) {
        margin-bottom: 40px;
      }

      section.exp {
        line-height: 20px;
        margin-bottom: 15px;
        margin-left: 90px;

        span.business {
          font-size: 16px;
          font-weight: bold;
        }

        span.job {
          font-size: 15px;
          font-style: italic;
        }

        span.date {
          font-size: 12px;
        }

        span.school {
          font-size: 16px;
          font-weight: bold;
        }

        span.g {
          font-size: 14px;
          font-style: italic;
        }

        span.year {
          font-weight: bold;
        }
      }
    }

    section#graduates {
      position: relative;
      width: 430px;
      padding-bottom: 20px;
      height: 180px;

      div.dipl {
        position: absolute;
        height: 84px;
        width: 84px;
        right: 45px;
        top: -5px;
        background-image: url('../assets/img/spritesheet.png');
        background-position: -84px -168px;
      }

      section.graduate {
        line-height: 20px;
        text-align: center;

        &:last-child {
          margin-top: 20px;
        }
      }
    }
  }
</style>

