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
            <input class="input" type="text" placeholder="Nom & Prénom" name="nameAndSurname" id="nameAndSurname"
                   autocomplete="off" required v-model="form.name">
            <input class="input" type="email" placeholder="Email" name="email" id="email" autocomplete="off" required
                   v-model="form.email">
            <textarea class="input" id="msgInput" cols="30" rows="10" placeholder="Message" name="message"
                      autocomplete="off" required v-model="form.message"></textarea>
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
    form: any = {
      name: '',
      email: '',
      message: ''
    }

    data: any = {
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

    sendData() {
      console.log(this.form)
      /*this.$http.post('/contact', {
        data: this.form
      }).then((result: any) => {
        console.log(result)
      })*/

      this.$axios.post('http://localhost:3000/contact',{ params: { data: this.form}})
        .then(response => this.responseData = response.data)
        .catch(error => {});
    }
  }
</script>
