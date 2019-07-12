<template>
  <div class="container project">
    <div class="title">
      <div class="outContent">
        <div class="content">
          <section class="titles">
            <h2>{{ $t(projectId + '.title') }}</h2>
            <h3>{{ $t(projectId + '.subject') }}</h3>
            <span>{{ $t(projectId + '.subtitle') }}</span>
          </section>
        </div>
      </div>
    </div>

    <div class="outContent">
      <div class="content">
        <section class="infos">
          <h1>
          </h1>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Project extends Vue {
    projectId: string = ''

    mounted () {
      if (this.$route.params.name === 'qwirk')
        this.projectId = 'projects[0]'
      else if (this.$route.params.name === 'instagram')
        this.projectId = 'projects[1]'
    }
  }
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
      }
    }
  }
</style>
