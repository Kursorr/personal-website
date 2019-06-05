<template>
  <div class="container project">
    <div class="title">
      <div class="outContent">
        <div class="content">
          <section class="titles">
            <h2>projets web</h2>
            <h3>Beauty Bio / BlueBand / Diablo 3 / Zozor</h3>
            <span>Sites vitrines</span>
          </section>
        </div>
      </div>
    </div>

    <div class="outContent">
      <div class="content">
        <section class="infos">
          <h1>Voici mes premièrs sites statiques réalisés en HTML / CSS et JS.</h1>
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
  export default class Project extends Vue {
  }
</script>
