<template>
  <div id="footer">
    <div class="outContent network">
      <div class="content">
        <div id="network">
          <a href="https://github.com/Ravaniss" class="roundedDiv github">
            <img src="../../public/img/network/github.png" alt="github">
          </a>
          <a href="https://www.linkedin.com/in/maxime-senechal-088b04a8/#" class="roundedDiv linkedin">
            <img src="../../public/img/network/linkedin.png" alt="linkedin">
          </a>
          <a href="https://twitter.com/SENECHAL_Maxime" class="roundedDiv twitter">
            <img src="../../public/img/network/twitter.png" alt="twitter">
          </a>
        </div>
      </div>
    </div>

    <div class="outContent address">
      <div class="content">
        <div id="personalInfos">
          <div id="infos">
            <h1>Développeur front & back-end</h1>
            <hr class="inside">
            <p>
              Passionné par les technologies du web depuis 3 ans, je souhaite utiliser cette passion au service de vos besoins.
              C'est pourquoi je suis à votre disposition pour répondre à tout type de projets:
              <ul>
                <li>- Création de sites internet</li>
                <li>- Développement spécifique</li>
                <li>- Application web</li>
              </ul>
            </p>
          </div>
          <div id="address">
            <address>
              <h1>senechal maxime</h1>
              <hr class="inside">
              <span id="post">11, rue des Roses <br>06110 le Cannet</span>
              <a href="tel:+33695577562" id="tel">(+33) 6.95.57.75.62</a>
              <a href="mailto:maxime.senechal@supinfo.com" id="email">maxime.senechal@supinfo.com</a>
              <span>www.maxime-senechal.com</span>
            </address>
          </div>
        </div>
      </div>
    </div>

    <div class="outContent copyright">
      <div class="content">
        <div id="footerEnd">
          <div id="legaleNotice">
            <router-link to="">mentions légales</router-link>
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

  @Component
  export default class Footer extends Vue {
  }
</script>
