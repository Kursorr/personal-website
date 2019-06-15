<template>
  <div id="app" class="darker">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
  require('../public/style/styles.scss')
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: {
      Header,
      Footer
    }
  })
  export default class App extends Vue {
  }
</script>
