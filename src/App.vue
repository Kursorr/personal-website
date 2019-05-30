<template>
  <div id="app">
    <div class="header">
      <div class="outContent">
        <div class="content row">
          <div class="logo"></div>
          <nav>
            <ul>
              <router-link tag="li" to="/"><span>home</span></router-link>
              <router-link tag="li" to="/about"><span>à propos</span></router-link>
              <router-link tag="li" to="/projects"><span>portfolio</span></router-link>
              <router-link tag="li" to="/contact"><span>contact</span></router-link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
  require('../public/style/styles.scss')
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class App extends Vue {
  }
</script>
