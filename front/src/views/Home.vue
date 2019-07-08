<template>
  <div class="container home">
    <v-lazy-image
      id="homeImg"
      :src="require(`@/assets/img/backgrounds/background.jpg`)"
      src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
    />
    <div id="overlay">
      <div id="myself">
        <h1>
          <span class="initials home">m</span>
          <p class="noup">axime</p>
          <span class="initials home s">s</span>
          <p>enechal</p>
        </h1>
        <h2>{{ $t('home-title') }} <br />freelance</h2>
        <router-link to="/projects" tag="a" class="btn animated infinite pulse">
          {{ $t('home-projects') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import VLazyImage from 'v-lazy-image'

  @Component({
    components: {
      VLazyImage
    }
  })
  export default class Home extends Vue {}
</script>

<style lang="scss">
  div.container.home {
    height: 100%;
    margin-top: 0;

    #homeImg {
      height: 100%;
      width: 100%;
      position: absolute;
    }

    div#overlay {
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      position: absolute;
      top: 0;

      div#myself {
        height: 90%;
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
          z-index: 2;

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
          z-index: 2;
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
</style>
