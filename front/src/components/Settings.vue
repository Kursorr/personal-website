<template>
  <div id="styleChanger" :class="[theme, isActive]">
    <div>
      <a class="changeOpener" @click="toggle()">
        <img src="../assets/img/settings.svg" alt="settings">
      </a>

      <strong class="title">style switcher</strong>
      <strong class="subtitle">style theme</strong>

      <ul class="list-inline list-style list-bg-color">
        <li class="dark">
          <a class="settingsBtn" @click="setDarker()">dark</a>
        </li>
        <li class="light">
          <a class="settingsBtn" @click="setLigther()">light</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import * as Vuex from 'vuex'
  import store from '../store'

  @Component({
    store,
    computed: {
      ...Vuex.mapGetters([
        'theme'
      ])
    },
    methods: {
      ...Vuex.mapActions([
        'setLigther',
        'setDarker'
      ])
    }
  })
  export default class Settings extends Vue {
    isActive: string = 'disabled'

    public toggle() {
      this.isActive = this.isActive === '' ? 'disabled' : ''
    }
  }
</script>

<style lang="scss">
  @import "../assets/style/variables.scss";

  #styleChanger {
    top: 150px;
    left: 0;
    width: 244px;
    z-index: 9999;
    position: fixed;
    padding: 16px 17px 5px 17px;
    transition: margin .4s ease;

    &.disabled {
      margin: 0 0 0 -245px;
    }

    .changeOpener {
      left: 100%;
      padding: 13px 10px 0;
      position: absolute;
      border-radius: 0 5px 5px 0;
      width: 49px;
      height: 54px;
      top: 50px;
    }

    a {
      transition: all .4s ease;
      &:hover {
        cursor: pointer;
      }

      img {
        width: 25px;
      }
    }

    .title {
      display: block;
      margin: 0 0 15px;
      padding: 0 0 8px;
      text-transform: uppercase;
      border-bottom: 1px solid #EEE;
    }

    .subtitle {
      color: #8F8F8F;
      display: block;
      margin: 0 0 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .list-style {
      margin: 0 0 14px;
      padding: 0 0 19px;
      border-bottom: 1px solid #EEE;

      li {
        padding: 0 5px 0 2px;
        display: inline-block;

        &.dark {
          background: transparent;
        }
      }

      .settingsBtn {
        width: 95px;
        padding: 4px;
        display: block;
        font-size: 12px;
        border-radius: 0;
        text-align: center;
        text-transform: uppercase;
      }
    }

    &.darker {
      background-color: $black;
      border: 1px solid #494949;

      .changeOpener {
        background: $black;
        border-right: 1px solid #494949;
        border-top: 1px solid #494949;
        border-bottom: 1px solid #494949;
      }

      .title {
        color: $white;
      }

      .settingsBtn {
        color: $white;
        background: $black;
        border: 1px solid #494949;

        &:hover {
          border: 1px solid $black;
          color: $black;
          background: $white;
        }
      }
    }

    &.lighter {
      background-color: $white;
      border: 1px solid #EEE;

      .changeOpener {
        background: $white;
        border-right: 1px solid #EEE;
        border-top: 1px solid #EEE;
        border-bottom: 1px solid #EEE;
      }

      .title {
        color: $black;
      }

      .settingsBtn {
        border: 1px solid $black;
        color: $black;
        background: transparent;

        &:hover {
          color: $white;
          background: $black;
        }
      }

    }
  }
</style>
