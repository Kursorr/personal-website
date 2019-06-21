<template>
  <div id="app" :class="theme">
    <Header />
    <Settings />
    <transition
      name="fade"
      mode="out-in">
      <router-view/>
    </transition>
    <Footer />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  require('./assets/style/styles.scss')

  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Settings from '@/components/Settings.vue'
  import * as Vuex from 'vuex'
  import store from './store'

  @Component({
    store,
    computed: {
      ...Vuex.mapGetters([
        'theme'
      ])
    },
    components: {
      Header,
      Footer,
      Settings
    }
  })
  export default class App extends Vue {
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
