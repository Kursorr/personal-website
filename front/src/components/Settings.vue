<template>
  <div id="styleChanger" :class="isActive">
    <div>
      <a class="changeOpener" @click="toggle()">
        <div class="settings-img"></div>
      </a>

      <strong class="title">{{ $t('settings-style-title') }}</strong>
      <strong class="subtitle">{{ $t('settings-style-subtitle') }}</strong>

      <ul class="list-style">
        <li class="dark">
          <a class="settingsBtn" @click="setDarker()">
            {{ $t('settings-style-dark') }}
          </a>
        </li>
        <li class="light">
          <a class="settingsBtn" @click="setLigther()">
            {{ $t('settings-style-light') }}
          </a>
        </li>
      </ul>

      <strong class="title">{{ $t('settings-lang-title') }}</strong>
      <strong class="subtitle">{{ $t('settings-lang-subtitle') }}</strong>

      <ul class="list-lang">
        <li class="flag"
            :class="frSelected ? 'frSelected': ''"
            id="fr"
            @click="setFr()"
        ></li>
        <li class="flag"
            :class="enSelected ? 'enSelected': ''"
            id="en"
            @click="setEn()"
        ></li>
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
    methods: {
      ...Vuex.mapActions([
        'setLigther',
        'setDarker'
      ])
    }
  })
  export default class Settings extends Vue {
    isActive: string = 'disabled'
    frSelected: boolean = true
    enSelected: boolean = false

    public toggle() {
      this.isActive = this.isActive === '' ? 'disabled' : ''
    }

    setFr () {
      this.$i18n.locale = 'fr'
      localStorage.locale = this.$i18n.locale

      this.frSelected = true
      this.enSelected = false
    }

    setEn () {
      this.$i18n.locale = 'en'
      localStorage.locale = this.$i18n.locale

      this.frSelected = false
      this.enSelected = true
    }

    mounted () {
      if (localStorage.locale) {
        this.$i18n.locale = localStorage.locale
      }
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
    padding: 17px;
    transition: margin .4s ease;

    &.disabled {
      margin: 0 0 0 -245px;
    }

    .changeOpener {
      left: 100%;
      padding: 9px 6px 0;
      position: absolute;
      border-radius: 0 5px 5px 0;
      width: 49px;
      height: 54px;
      top: 50px;

      .settings-img {
        width: 37px; height: 36px;
        background: url('../assets/img/sprite.png') -283px -140px;

        &:hover {
          cursor: pointer;
        }
      }
    }

    a {
      transition: all .4s ease;
      img {
        width: 25px;
        transform: rotate(0deg);
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
      margin-bottom: 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .list-style {
      margin-bottom: 20px;

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

        &:hover {
          cursor: pointer;
        }
      }
    }

    .list-lang {
      display: flex;
      justify-content: space-around;

      .flag {
        background-repeat: no-repeat;
        background-size: 40px;
        height: 40px;
        width: 40px;
        opacity: 0.6;

        &:hover {
          cursor: pointer;
          opacity: 1;
          transition: opacity 150ms linear;
        }
      }

      .flag.frSelected, .flag.enSelected {
        opacity: 1;
      }

      #fr {
        width: 67px;
        height: 39px;
        background: url('../assets/img/sprite.png') -10px -192px;
      }

      #en {
        width: 67px;
        height: 39px;
        background: url('../assets/img/sprite.png') -192px -101px;
      }
    }
  }

  .darker {
    #styleChanger {
      background-color: $black;
      border: 1px solid #494949;
    }

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

  .lighter {
    #styleChanger {
      background-color: $white;
      border: 1px solid #EEE;
    }

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
</style>
