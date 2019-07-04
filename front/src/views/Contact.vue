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
          <h2>{{ $t('contact-title') }}</h2>
          <p>
            {{ $t('contact-text') }}<br>
            {{ $t('contact-text2') }}
          </p>
        </section>

        <section id="infoAndForm">
          <section id="informations">
            <h2><span class="initials">S</span>ENECHAL <span class="initials">M</span>axime</h2>
            <p id="address">
              11 rue des Roses<br>
              06110 - le Cannet<br>
              +33 6 95 57 75 62<br>
            </p>
          </section>
          <form method="POST" id="submitForm" @submit.prevent="sendData()">
            <div>
              <input type="text"
                     :placeholder="$t('contact-name-surname')"
                     v-model="form.name"
                     autocomplete="off"
                     required>
              <span class="bottom"></span>
              <span class="right"></span>
              <span class="top"></span>
              <span class="left"></span>
            </div>

            <div>
              <input type="text"
                     :placeholder="$t('contact-email')"
                     v-model="form.email"
                     autocomplete="off"
                     required>
              <span class="bottom"></span>
              <span class="right"></span>
              <span class="top"></span>
              <span class="left"></span>
            </div>

            <div>
              <textarea
                type="text"
                :placeholder="$t('contact-msg')"
                v-model="form.message"
                autocomplete="off"
                required
                rows="9"
                cols="40"
              ></textarea>
              <span class="bottom"></span>
              <span class="right"></span>
              <span class="top"></span>
              <span class="left"></span>
            </div>

            <div class="g-recaptcha" data-sitekey="6LenZjkUAAAAACrcywJA5E-XxxNh1iykONppVi_7"></div>
            <vue-recaptcha sitekey="6LenZjkUAAAAACrcywJA5E-XxxNh1iykONppVi_7"></vue-recaptcha>
            <button class="btn" type="submit">Envoyé</button>
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

      div {
        position: relative;
        margin-bottom: 10px;
      }

      input, textarea {
        width: 100%;
        background-color: #F9F9F9;
        padding: 10px;
        font-size: 12px;
        border: 1px solid transparent;
        transition: background-color 0.3s ease-in-out;

        &:focus {
          outline: none;

          &::placeholder {
            color: #323232;
            transition: color 500ms;
          }
        }

        &::placeholder {
          color: #7F7F7F;
        }
      }

      span {
        position: absolute;
        background-color: #E59A58;
        transition: transform 0.5s ease;
      }

      .bottom,
      .top {
        height: 1px;
        left: 0;
        right: 0;
        transform: scaleX(0);
      }

      .left,
      .right {
        width: 1px;
        top: 0;
        bottom: 0;
        transform: scaleY(0);
      }

      .bottom {
        bottom: 0;
        transform-origin: bottom right;
      }

      input:focus ~ .bottom, textarea:focus ~ .bottom {
        transform-origin: bottom left;
        transform: scaleX(1);
      }

      .right {
        right: 0;
        transform-origin: top right;
      }

      input:focus ~ .right, textarea:focus ~ .right {
        transform-origin: bottom right;
        transform: scaleY(1);
      }

      .top {
        top: 0;
        transform-origin: top left;
      }

      input:focus ~ .top, textarea:focus ~ .top  {
        transform-origin: top right;
        transform: scaleX(1);
      }

      .left {
        left: 0;
        transform-origin: bottom left;
      }

      input:focus ~ .left, textarea:focus ~ .left {
        transform-origin: top left;
        transform: scaleY(1);
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
