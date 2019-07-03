<template>
  <img
    :src="require(`@/assets/img/portraits/` + actualImg)"
    alt="portrait"
    @mouseover="changeImg()">
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Portrait extends Vue {
    public portraits = [
      'anger.png',
      'ascendant.png',
      'barbarian.png',
      'beaten.png',
      'class.png',
      'cyberpunk.png',
      'determined.png',
      'happy.png',
      'neutral.png',
      'sadness.png',
      'saiyan.png',
      'smirk.png',
      'triggered.png',
    ]
    actualImg = this.portraits[7]

    generateNumber () {
      return Math.floor(Math.random() * 13)
    }

    changeImg() {
      const index = this.generateNumber()
      this.actualImg = this.portraits[index]
    }
  }
</script>

<style lang="scss" scoped>
  img {
    height: 300px;
    border-radius: 50%;
    border: solid #F2F2F2 1px;

    &:hover {
      border-color: #F7E0CC;
    }
  }
</style>
