<template>
  <div id="app">
    <Header></Header>
    <Settings></Settings>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
  require('./assets/style/styles.scss')
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Settings from '@/components/Settings.vue'
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: {
      Header,
      Footer,
      Settings
    }
  })
  export default class App extends Vue {
  }
</script>
