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
  langs = ['fr', 'en']
}
</script>
