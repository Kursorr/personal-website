<template>
  <div class="container project">
    <div class="title">
      <div class="outContent">
        <div class="content">
          <section class="titles">
            <h2>{{ $t('project-statics-websites-title') }}</h2>
            <h3>Beauty Bio / BlueBand / Diablo 3 / Zozor & CV</h3>
            <span>{{ $t('project-statics-websites-subtitle') }}</span>
          </section>
        </div>
      </div>
    </div>

    <div class="outContent">
      <div class="content">
        <section class="infos">
          <h1>
            {{ $t('project-statics-websites-infos-title') }}
          </h1>
          <div class="imgs">
            <div id="first"></div>
            <div id="second"></div>
            <div id="third"></div>
            <div id="four"></div>
            <div id="fourth"></div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Project extends Vue {}
</script>

<style lang="scss">
  .container.project {
    margin-top: 60px;

    div.title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      background-color: #2A2A2A;
      margin-bottom: 25px;

      section.titles {
        display: flex;
        flex-direction: column;
        color: #fff;

        h2 {
          color: #FBFBFB;
          font-size: 18px;
          text-transform: uppercase;
          text-align: left;
          letter-spacing: 1px;
        }

        h3 {
          color: #E1E1E1;
          letter-spacing: 1px;
        }

        span {
          color: #E1E1E1;
          font-style: italic;
          letter-spacing: 0.7px;
        }
      }
    }

    .infos {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        width: 450px;
      }

      .imgs {
        margin: 50px 0;
        display: flex;
        flex-wrap: wrap;

        #first {
          background-image: url('../assets/img/project/statics/beautybio.png');
          background-size: 440px;
          background-repeat: no-repeat;
          height: 330px;
          width: 430px;
        }
        #second {
          background-image: url('../assets/img/project/statics/blueband.png');
          background-size: 440px;
          background-repeat: no-repeat;
          height: 480px;
          width: 430px;
        }
        #third {
          background-image: url('../assets/img/project/statics/diablo.png');
          background-size: 440px;
          background-repeat: no-repeat;
          height: 240px;
          width: 430px;
        }
        #four {
          background-image: url('../assets/img/project/statics/zozor.png');
          background-size: 440px;
          background-repeat: no-repeat;
          height: 330px;
          width: 430px;
        }
        #fourth {
          background-image: url('../assets/img/project/statics/zozor-cv.png');
          background-size: 440px;
          background-repeat: no-repeat;
          height: 380px;
          width: 430px;
        }
      }
    }
  }
</style>
