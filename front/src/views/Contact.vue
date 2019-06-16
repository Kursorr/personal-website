<template>
  <div class="container contact">
    <GmapMap
      :center="{lat:43.5756, lng:7.000520000000051}"
      :zoom="13"
      map-type-id="terrain"
      style="width: 100%; height: 400px; z-index:1;"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in data.markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>

    <div class="outContent">
      <div class="content">
        <section id="message">
          <h2>Intéressé par mon profil ?</h2>
          <p>
            N'hésitez pas à me contacter directement ou,<br>
            laissez moi un message et je vous recontacterai directement !
          </p>
        </section>

        <section id="infoAndForm">
          <section id="informations">
            <h2><span class="initials">S</span>ENECHAL <span class="initials">M</span>axime</h2>
            <p id="address">
              11 rue des Roses<br>
              06110 - Le Cannet<br>
              +33 6 95 57 75 62<br>
            </p>
          </section>
          <form method="POST" id="submitForm" @submit.prevent="sendData()">
            <label for="name" class="inp">
              <input type="text" class="input" id="name" placeholder=" " required v-model="form.name" autocomplete="off">
              <span class="label">Nom et prénom</span>
              <span class="border"></span>
            </label>

            <label for="email" class="inp" id="emailLabel">
              <input type="text" class="input" id="email" placeholder=" " required v-model="form.email" autocomplete="off">
              <span class="label">Email</span>
              <span class="border"></span>
            </label>

            <label for="message" class="inp" id="messageLabel">
              <textarea id="msgInput" cols="30" rows="10" autocomplete="off" required v-model="form.message" placeholder=" "></textarea>
              <span class="label">Votre message</span>
              <span class="border area"></span>
            </label>

            <div class="g-recaptcha" data-sitekey="6LenZjkUAAAAACrcywJA5E-XxxNh1iykONppVi_7"></div>
            <vue-recaptcha sitekey="6LenZjkUAAAAACrcywJA5E-XxxNh1iykONppVi_7"></vue-recaptcha>
            <input class="btn" type="submit" value="Envoyé">
            <p id="contactResult"></p>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import VueRecaptcha from 'vue-recaptcha'

  @Component({
    components: {
      VueRecaptcha
    }
  })
  export default class Contact extends Vue {
    private form: any = {
      name: '',
      email: '',
      message: ''
    }

    private data: any = {
      center: {
        lat: 43.5756,
        lng: 7.000520000000051
      },
      markers: [{
        position: {
          lat: 43.5756,
          lng: 7.000520000000051
        }
      }, {
        position: {
          lat: 43.5756,
          lng: 7.000520000000051
        }
      }]
    }

    public sendData() {
      console.log(this.form)

      this.$axios.post('http://localhost:3000/contact', { params: { data: this.form}})
        .then((response: any) => response.data)
        .catch((error: any) => {})
    }

    test() {
      console.log('clicked')
    }
  }
</script>

<style lang="scss">
  .contact-error {
    color: #9c1920;
  }

  .contact-success {
    color: #35a026;
  }

  .container.contact {
    margin-top: 60px;
  }

  section#message {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;

    h2 {
      font-size: 20px;
      margin-bottom: 15px;
      border-bottom: solid #e59a58 1px;
    }
  }

  section#infoAndForm {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-bottom: 50px;

    form {
      display: flex;
      flex-direction: column;

      .inp {
        position: relative;
        margin: auto;
        width: 100%;
      }

      .label {
        position: absolute;
        top: 16px;
        left: 0;
        font-size: 16px;
        color: #9098A9;
        font-weight: 500;
        transform-origin: 0 0;
        transition: all .2s ease;
      }

      #emailLabel {
        margin: 20px 0;
      }

      .border {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background: #0077FF;
        transform: scaleX(0);
        transform-origin: 0 0;
        transition: all .15s ease;
      }

      .border.area {
        bottom: 2px;
      }

      input.input, textarea {
        -webkit-appearance: none;
        width: 100%;
        border: 0;
        font-family: inherit;
        padding: 12px 0;
        height: 48px;
        font-size: 16px;
        font-weight: 500;
        border-bottom: 2px solid #C8CCD4;
        background: none;
        border-radius: 0;
        color: #223254;
        transition: all .15s ease;

        &:hover {
          background: rgba(#223254, .03)
        }

        &:not(:placeholder-shown) + span {
          color: #5A667F;
          transform: translateY(-26px) scale(.75);
        }

        &:focus {
          background: none;
          outline: none;

          + span {
            color: #0077FF;
            transform: translateY(-26px) scale(.75);

            + .border {
              transform: scaleX(1);
            }
          }
        }
      }
    }

    section#informations {
      display: flex;
      justify-content: center;
      flex-direction: column;

      p#address {
        margin-top: 15px;
      }
    }
  }
</style>
