<template>
  <div id="app">
    <div class="header">
      <div class="outContent">
        <div class="content row">
          <div class="logo"></div>
          <input type="checkbox" id="menu-toggle" />
          <label for="menu-toggle" class="label-toggle"></label>
          <ul>
            <router-link tag="li" to="/"><span>home</span></router-link>
            <router-link tag="li" to="/about"><span>à propos</span></router-link>
            <router-link tag="li" to="/projects"><span>portfolio</span></router-link>
            <router-link tag="li" to="/contact"><span>contact</span></router-link>
          </ul>
        </div>
      </div>
    </div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
  import Footer from '@/components/Footer.vue'

  require('../public/style/styles.scss')

  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: {
      Footer
    }
  })
  export default class App extends Vue {
  }
</script>
