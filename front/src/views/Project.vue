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
      background-color: #1b1b1b;

      section.titles {
        display: flex;
        flex-direction: column;
        width: inherit;
        color: #fff;

        h2 {
          color: #fff;
          font-size: 24px;
          text-transform: uppercase;
          text-align: left;
        }
      }
    }

    .infos {
      display: flex;
      align-items: center;
      justify-content: center;

      h1 {
        width: 450px;
      }

      .imgs {
        #first {
          background-image: url('../assets/img/project/statics/beautybio.png');
        }
        #second {

        }
        #third {

        }
        #four {

        }
        #fourth {

        }
      }
    }
  }
</style>
