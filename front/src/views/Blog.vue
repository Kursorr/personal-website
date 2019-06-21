<template>
  <div class="container blog">
    <section class="blog">
      <div class="parallax">
        <h2><span class="initials">B</span>log</h2>
      </div>
    </section>

    <div class="outContent">
      <div class="content">
        <section class="infos">
          <h1>
            test
          </h1>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  div.container.blog {
    margin-top: 0;

    div.parallax {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;
      width: 100%;
      background-image: url('../assets/img/write.jpg');
      background-size: cover;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;

      h2 {
        font-size: 52px;
        color: #FFF;
        text-transform: uppercase;
        margin-top: 50px;
      }
    }
  }
</style>
