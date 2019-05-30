<template>
  <div class="container">
    <GmapMap
      :center="{lat:43.5756, lng:7.000520000000051}"
      :zoom="13"
      map-type-id="terrain"
      style="width: 100%; height: 400px; margin-top: 70px; z-index:1;"
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
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Contact extends Vue {
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
  }
</script>
