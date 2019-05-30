<template>
  <div class="container">
    <h1><span class="initials">s</span>enechal <span class="initials">m</span>axime</h1>

    <hr class="out">

    <div id="aboutMe">
      <div class="outContent">
        <div class="content">
          <div id="prensentation">
            <div class="circle">
            </div>
            <p>
              Après avoir effectué un Baccalauréat Professionnel en Comptabilité, je me suis directement orienté dans l'informatique, et plus précisément dans le développement de sites internet. C'est pourquoi j'ai rejoins SUPINFO pendant 3 ans.
              Depuis ce temps-là, j'ai quelques projets à mon actif, que ce soit du simple site web statique/dynamique au logiciel. Tel que mon très gros projet : Reproduire Discord, qui est en cours de création. Pour terminer : Je suis un grand adepte de NodeJS !
            </p>
          </div>

          <hr class="out">

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
                    <span>vuejs</span>
                  </div>
                  <div class="capacity">
                    <span>reactjs</span>
                  </div>
                  <div class="capacity">
                    <span>angularjs</span>
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

          <hr class="out">

          <section id="exp-and-graduation">
            <section id="experiences">
              <h1>Expérience</h1>
              <hr class="inside">
              <section class="exp">
                <p><span class="business">YachtSupply</span> - <span class="job">Développeur web</span><br><span class="date">de juillet à octobre 2017</span></p>
              </section>
              <section class="exp">
                <p><span class="business">NETexcom</span> - <span class="job">Développeur web & mobile</span><br><span class="date">de juillet à novembre 2016</span></p>
              </section>
              <section class="exp">
                <p><span class="business">YachtSupply</span> - <span class="job">Développeur web</span><br><span class="date">de juillet à novembre 2015</span></p>
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
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Footer from '../components/Footer.vue'

  @Component({
    components: {
      Footer
    }
  })
  export default class About extends Vue {
  }
</script>

