<template>
  <!--<div class="home">
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
      </select>
    </div>

    <h1>{{ $t("hello") }}</h1>-->

  <div class="container home">
    <div id="bigImg">
      <div id="overlay">
        <div id="myself">
          <h1>
            <span class="initials home">m</span>
            <p class="noup">axime</p>
            <span class="initials home s">s</span>
            <p>enechal</p>
          </h1>
          <h2>développeur fullstack <br />freelance</h2>
          <router-link to="/projects" tag="a" class="btn animated infinite pulse">Regardez mes projets</router-link>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  public langs = ['fr', 'en']
}
</script>

<style lang="scss">
  div.container.home {
    height: 100%;
    margin-top: 0;

    div#bigImg {
      height: 100%;
      background: url(../assets/img/background.jpg) 100% 0 no-repeat;
      background-size: cover;

      div#overlay {
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);

        div#myself {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          h1 {
            font-size: 22px;
            display: flex;
            color: #fff;
            text-transform: uppercase;
            text-align: center;
            font-weight: 100;
            letter-spacing: 3px;
            margin-bottom: 10px;

            .noup {
              text-transform: lowercase;
            }

            .initials.home.s {
              text-transform: uppercase;
              margin-left: 15px;
            }
          }

          h2 {
            color: #fff;
            font-size: 40px;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 100;
          }

          .animated.infinite {
            animation-iteration-count: infinite;
          }

          .pulse {
            animation-name: pulse;
          }

          .animated {
            animation-duration: 1s;
            animation-fill-mode: both;
          }

          @keyframes pulse {
            0% {
              transform: scaleX(1);
            }
            50% {
              transform: scale3d(1.05, 1.05, 1.05);
            }
            100% {
              transform: scaleX(1);
            }
          }
        }
      }
    }
  }
</style>
