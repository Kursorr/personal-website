<template>
  <div class="container project">
    <div class="title">
      <div class="outContent">
        <div class="content">
          <section class="titles">
            <h2>{{ $t(`projects[${projectId}].title`) }}</h2>
            <h3>{{ $t(`projects[${projectId}].subject`) }}</h3>
            <span>{{ $t(`projects[${projectId}].subtitle`) }}</span>
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
    projects = ['qwirk', 'instagram']
    projectId: number = 0

    mounted () {
      const found = this.projects.find((project) => {
        return this.$route.params.name === project
      })

      if (found) {
        this.projectId = this.projects.indexOf(found)
      }
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
