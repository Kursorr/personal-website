<template>
  <!--<div class="home">
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
      </select>
    </div>

    <h1>{{ $t("hello") }}</h1>-->

  <div class="container">
    <div id="bigImg">
      <div id="overlay">
        <div id="myself">
          <h1>
            <span class="initials">s</span>enechal - <span class="initials">m</span>axime
          </h1>
          <h2>développeur web</h2>
          <a class="btn animated infinite pulse" href="/projects">Regardez mes projets</a>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Footer from '../components/Footer.vue'

@Component({
  components: {
    Footer
  }
})
export default class Home extends Vue {
  langs = ['fr', 'en']
}
</script>
