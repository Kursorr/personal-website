<template>
  <div id="footer" :class="theme">
    <div class="outContent network">
      <div class="content">
        <div id="network">
          <a href="https://github.com/Ravaniss" class="roundedDiv github">
            <div class="iconSize" id="github"></div>
          </a>
          <a href="https://www.linkedin.com/in/maxime-senechal-088b04a8/#" class="roundedDiv linkedin">
            <div class="iconSize" id="linkedin"></div>
          </a>
          <a href="https://twitter.com/SENECHAL_Maxime" class="roundedDiv twitter">
            <div class="iconSize" id="twitter"></div>
          </a>
        </div>
      </div>
    </div>

    <div class="outContent address">
      <div class="content">
        <div id="personalInfos">
          <div id="infos">
            <h1>{{ $t('footer-title') }}</h1>
            <hr class="inside">
            <p>
              {{ $t('footer-text') }}
              <ul>
                <li>- {{ $t('project-type1') }}</li>
                <li>- {{ $t('project-type2') }}</li>
                <li>- {{ $t('project-type3') }}</li>
              </ul>
            </p>
          </div>
          <address>
            <h1>senechal maxime</h1>
            <hr class="inside">
            <div>
              <span id="post">11, rue des Roses<br>06110 le Cannet</span>
              <a href="tel:+33695577562" id="tel">(+33) 6.95.57.75.62</a>
              <a href="mailto:maxime.senechal@supinfo.com" id="email">maxime.senechal@supinfo.com</a>
              <span>www.maxime-senechal.com</span>
            </div>
          </address>
        </div>
      </div>
    </div>

    <div class="outContent copyright">
      <div class="content">
        <div id="footerEnd">
          <div id="legaleNotice">
            <router-link to="">{{ $t('legalmentions') }}</router-link>
          </div>

          <div id="madeWithLove">
            <span>
              Made with
              <svg class="heart" viewBox="0 0 32 29.6">
                <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
              </svg>
              by <router-link to="/about" tag="a"><strong>myself</strong></router-link>
            </span>
          </div>

          <div id="copyright">
            COPYRIGHT © 2019
          </div>
        </div>
      </div>
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
    }
  })
  export default class Footer extends Vue {}
</script>

<style lang="scss">
  @import "../assets/style/variables.scss";

  #footer {
    #network {
      display: flex;
      padding: 15px 0;

      @media screen and (max-width: $lg-breakpoint) {
        padding: 15px 30px
      }

      .roundedDiv {
        height: 46px;
        width: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        .iconSize {
          height: 16px;
          width: 16px;
        }

        &:nth-child(2) {
          margin: 0 15px;
        }

        &:hover {
          background-color: $orange;
          transition: background-color 0.5s ease;
        }

        &.github {
          &:hover {
            background-color: #6e5494;
          }
        }

        &.linkedin {
          &:hover {
            background-color: #004b7c;
          }
        }

        &.twitter {
          &:hover {
            background-color: #55acee;
          }
        }

        img {
          width: 16px;
        }
      }
    }

    div.outContent.address {
      div#personalInfos {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 30px 0;

        @media screen and (max-width: $lg-breakpoint) {
          padding: 30px;
        }

        div#infos {
          max-width: 500px;

          @media screen and (max-width: $md-breakpoint) {
            margin-bottom: 30px;
          }

          h1 {
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 1px;
          }

          hr {
            width: 276px;
            margin-left: 0;
          }

          p {
            color: #7f7f7f;
            line-height: 20px;

            ul {
              margin-top: 10px;
            }
          }
        }

        address {
          display: flex;
          flex-direction: column;
          color: #7f7f7f;
          text-align: right;

          h1 {
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 1px;

            @media screen and (max-width: $md-breakpoint) {
              text-align: left;
            }
          }

          hr.inside {
            margin-right: 0;
            width: 152px;

            @media screen and (max-width: $md-breakpoint) {
              margin-left: 0;
              width: 150px;
            }
          }

          div {
            line-height: 20px;
            display: flex;
            flex-direction: column;

            span#post, a#tel, a#email {
              margin-bottom: 5px;
            }

            a {
              color: #7f7f7f;
            }
          }
        }
      }
    }

    div.outContent.copyright {
      div#footerEnd {
        display: flex;
        justify-content: space-between;
        padding: 30px 0;

        @media screen and (max-width: $lg-breakpoint) {
          padding: 20px 30px;
        }

        #legaleNotice {
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 12px;

          a {
            color: #7f7f7f;

            &:hover {
              color: $white;
            }
          }
        }

        div#madeWithLove {
          color: #7f7f7f;
          letter-spacing: 1px;
          font-size: 12px;

          .heart {
            fill: #E90606;
            top: 5px;
            width: 10px;
            animation: heartPulse .35s infinite alternate;
          }

          @keyframes heartPulse {
            to {
              transform: scale(1.1);
            }
          }

          a {
            color: #7f7f7f;
            &:hover {
              color: $orange;
              cursor: pointer;
            }
          }
        }

        div#copyright {
          color: #7f7f7f;
          font-size: 12px;
        }
      }
    }


    &.darker {
      .outContent.network {
        background-color: $black;

        .roundedDiv {
          background-color: #383838;
        }

        #github {
          background: url(../assets/img/network/lighter/github.png) no-repeat;
          background-size: 16px;
        }

        #linkedin {
          background: url(../assets/img/network/lighter/linkedin.png) no-repeat;
          background-size: 16px;
        }

        #twitter {
          background: url(../assets/img/network/lighter/twitter.png) no-repeat;
          background-size: 16px;
        }
      }

      div.outContent.address {
        background-color: #2A2A2A;

        h1 {
          color: $white;
        }
      }

      div.outContent.copyright {
        background-color: $black;
      }
    }

    &.lighter {
      .outContent.network {
        background-color: #CACACA;

        .roundedDiv {
          background-color: #E1E1E1;
        }

        #github {
          background: url(../assets/img/network/darker/github.png) no-repeat;
          background-size: 16px;
        }

        #linkedin {
          background: url(../assets/img/network/darker/linkedin.png) no-repeat;
          background-size: 16px;
        }

        #twitter {
          background: url(../assets/img/network/darker/twitter.png) no-repeat;
          background-size: 16px;
        }
      }

      div.outContent.address {
        background-color: #E1E1E1;

        h1 {
          color: $black;
        }
      }

      div.outContent.copyright {
        background-color: #CACACA;
      }
    }
  }
</style>
