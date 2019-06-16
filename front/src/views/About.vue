<template>
  <div class="container">
    <h1><span class="initials">s</span>enechal <span class="initials">m</span>axime</h1>

    <hr class="name">

    <div id="aboutMe">
      <div class="outContent">
        <div class="content">
          <div id="prensentation">
            <div class="circle">
            </div>
            <div id="all">
              <h1>Vous cherchez un développeur web ?</h1>
              <p>
                Vous êtes au bon endroit !<br/>
                Je m'appelle Maxime Senechal, j'ai commencé le développement web depuis 3 ans maintenant. J'ai quelques projets à mon actif, que ce soit du simple site web statique/dynamique au logiciel, tel que mon très gros projet qui est de reproduire Discord.
              </p>
            </div>
          </div>

          <hr class="in">

          <section id="skills">
            <section class="skill">
              <div class="webdesign"></div>
              <section class="text">
                <h2>Webdesign</h2>
                <p>Je sais créer des maquettes graphiques et construire la structure d'un site web. Je sais ce qui est bien pour l'utilisateur, tant au niveau interface que expérience.</p>
                <section class="competences">
                  <div class="capacity">
                    <span>ui</span>
                  </div>
                  <div class="capacity">
                    <span>ux</span>
                  </div>
                  <div class="capacity">
                    <span>ergonomie</span>
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
                <h2>Développement front-end</h2>
                <p>Intégrer des maquettes web, créer des expériences adaptatives, réaliser des animations, c'est mon coeur de métier.</p>
                <section class="competences">
                  <div class="capacity">
                    <span>html</span>
                  </div>
                  <div class="capacity">
                    <span>css</span>
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
                <h2>Développement back-end</h2>
                <p>De l'idée à la publication de celle-ci, de nombreux facteurs entrent en compte dans la qualité du rendu final. Qu'il s'agisse du choix des outils, des technologies ou encore de leur évolution, c'est tous les éléments qui composent ce processus qui me passionnent.</p>
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
                <h2>100% Best Practice !</h2>
                <p>Je suis un fervent défenseur des bonnes pratiques et conventions liées au code. J'apprécie le fait que mon code soit propre et organisé, que les outils utilisés pour créer le soient à bon escient. Pour rester au jus, je fais ma veille technologique tous les matins !</p>
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
              <h1>Expérience</h1>
              <hr class="inside">
              <section class="exp">
                <p><span class="business">Traveljuice</span> - <span class="job">Développeur Front-end</span><br><span
                  class="date">de décembre 2017 à aujourd'hui - 1 an 7 mois</span></p>
              </section>
              <section class="exp">
                <p><span class="business">YachtSupply</span> - <span class="job">Développeur FullStack</span><br><span
                  class="date">de juillet à septembre 2017 - 3 mois</span></p>
              </section>
              <section class="exp">
                <p><span class="business">NETexcom</span> - <span class="job">Développeur web &
                  mobile</span><br><span class="date">de juillet à octobre 2016 - 4 mois</span></p>
              </section>

              <section class="exp">
                <p><span class="business">What's Up Informatique</span> - <span class="job">Développeur
                  web</span><br><span
                  class="date">de juillet à octobre 2015 - 4 mois</span></p>
              </section>
            </section>

            <section id="graduates">
              <div class="dipl"></div>
              <h1>Diplômes</h1>
              <hr class="inside">
              <section class="graduate">
                <p><span class="school">Supinfo International University</span><br><span class="g">Associate of Science (BAC +2)</span> - <span class="year">2017</span></p>
              </section>
              <section class="graduate">
                <p><span class="school">Greta</span><br><span class="g">Baccalauréat Professionnel Comptabilité</span> - <span class="year">2014</span></p>
              </section>
            </section>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class About extends Vue {
  }
</script>

<style lang="scss">
  @import "../assets/style/variables.scss";

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

      div.circle {
        height: 240px;
        min-width: 240px;
        border: solid $black 1px;
        border-radius: 50%;
      }

      div#all {
        width: 42%;

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
          flex-wrap: wrap;

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
        margin-left: 15px;

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

