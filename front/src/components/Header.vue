<template>
  <div class="header">
    <div class="outContent">
      <div class="content row">
        <div class="logo"></div>
        <input type="checkbox" id="menu-toggle" />
        <label for="menu-toggle" class="label-toggle"></label>
        <ul>
          <router-link tag="li" to="/">
            <span>{{ $t('menu-home') }}</span>
          </router-link>
          <router-link tag="li" to="/about">
            <span>{{ $t('menu-about') }}</span>
          </router-link>
          <router-link tag="li" to="/projects">
            <span>{{ $t('menu-portfolio') }}</span>
          </router-link>
          <router-link tag="li" to="/blog">
            <span>blog</span>
          </router-link>
          <router-link tag="li" to="/contact">
            <span>{{ $t('menu-contact') }}</span>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Header extends Vue {
  }
</script>

<style lang="scss">
  @import "../assets/style/variables.scss";

  div.header {
    border-bottom: solid $orange 1px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    width: 100%;
    z-index: 2;

    div.content.row {
      justify-content: space-between;
    }

    div.logo {
      height: 61px;
      width: 100px;
    }

    #menu-toggle  { display: none; }
    .label-toggle { display: none; }

    ul {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      letter-spacing: 1px;

      li {
        margin-bottom: 1px;
        font-size: 12px;

        &:hover {
          cursor: pointer;
          border-bottom: solid $hover 1px;
          transition: color 0.2s ease;
        }

        span {
          text-transform: uppercase;
        }
      }
    }

    .router-link-exact-active {
      border-bottom: solid $hover 1px;
      cursor: pointer;
    }
  }

  .darker {
    .header {
      background-color: rgba(42, 42, 42, .7);
      color: #A5A5A5;
    }

    li:hover, .router-link-exact-active {
      color: $white;
    }
  }

  .lighter {
    .header {
      background-color: rgba(255, 255, 255, .7);
      color: #4E4E4E;
    }

    li:hover, .router-link-exact-active  {
      color: $black;
    }
  }


  @media screen and (max-width: $sm-breakpoint) {
    div.header {
      ul {
        display: flex;
        flex-direction: column;
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: 60px;
        width: 100%;

        li:first-child {
          margin-top: 15px;
        }

        li {
          margin-bottom: 15px;
        }
      }
    }

    #menu-toggle:checked ~ ul {
      opacity: 1;
      visibility: visible;
    }

    .label-toggle {
      background: linear-gradient(to bottom, $orange 0%, $orange 20%, transparent 20%, transparent 40%, $orange 40%, $orange 60%, transparent 60%, transparent 80%, $orange 80%, $orange 100%);
      cursor: pointer;
      display: block;
      float: right;
      height: 35px;
      margin-top: 1em;
      width: 35px;
    }

    div.header .label-toggle {
      display: block;
    }

    &.darker {
      ul {
        background-color: rgba(42, 42, 42, 0.7);
      }
    }

    &.lighter {
      ul {
        background-color: rgba(255, 255, 255, 0.7);
      }
    }
  }
</style>
