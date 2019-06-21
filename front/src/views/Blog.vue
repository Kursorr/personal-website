<template>
  <div class="container blog">
    <section class="blog">
      <div class="parallax">
        <h2><span class="initials">B</span>log</h2>
      </div>
    </section>

    <div class="outContent">
      <div class="content">
        <section class="posts">
          <div class="post">
            <div class="img"></div>
            <div class="titleDate">
              <h1>Dockerisation de mon projet Qwirk</h1>
              <div class="date">
                31/07/2019
              </div>
            </div>
            <div class="presentation">
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi et necessitatibus possimus? Dolor
                dolorum facere maxime nobis soluta! Ab dolorem doloremque eius ex facilis laudantium libero omnis
                quibusdam sit voluptatem.
              </div>
              <div>A ad autem deleniti dignissimos, doloremque ea error et facilis incidunt iste laudantium, libero modi
                numquam obcaecati perspiciatis reprehenderit ut voluptas. Beatae cupiditate hic ipsa laudantium
                provident tempora vel veniam?
              </div>
              <div>Delectus, incidunt modi neque nisi officiis quos! Accusamus alias at corporis enim eos, impedit iste
                nulla omnis perferendis porro quasi quisquam saepe suscipit ullam velit vero voluptate? Atque, dicta
                obcaecati?
              </div>
            </div>
            <button class="read">
              Lire l'article
            </button>
          </div>
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

  section.posts {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 30px auto 0;

    div.post {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 600px;
      margin-bottom: 30px;
      border: solid #2A2A2A 1px;
      background-color: #2A2A2A;
      color: #A3A3A3;
      border-radius: 2px;

      &:hover {
        border: solid #E59A58 1px;
      }

      .img {
        background-image: url('../assets/img/linescode.jpg');
        color: #FFF;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
      }

      .titleDate {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px 25px;

        h1 {
          font-size: 16px;
          color: #CCC;
          letter-spacing: 1px;
        }

        .date {
          font-size: 10px;
          letter-spacing: 2px;
        }
      }

      .presentation {
        margin: 0 25px 20px;
        text-align: justify;
        line-height: 20px;
        letter-spacing: .8px;
      }

      button.read {
        color: #FFF;
        background-color: #383838;
        border: none;
        padding: 15px;
        text-transform: uppercase;
        outline: 0;

        &:hover {
          cursor: pointer;
          background-color: #222;
          transition: background-color 150ms;
        }
      }
    }
  }
</style>
