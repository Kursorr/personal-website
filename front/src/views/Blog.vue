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
            <div class="img">
              Dockerisation de mon projet Qwirk
            </div>
            <div class="date">
              31/07/2019
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
            <div class="read">
              Lire l'article
            </div>
          </div>
          <div class="post">
            <div class="img">
              Dockerisation de mon projet Qwirk
            </div>
            <div class="date">
              31/07/2019
            </div>
            <div class="presentation">
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aspernatur cupiditate dicta,
                eos, fugiat hic magni molestias nam nisi nobis non omnis quas reiciendis sit tempore ullam vel
                voluptatibus.
              </div>
              <div>Ad delectus doloremque doloribus et illum libero natus officia quas ratione vero. Ad, aliquid,
                deleniti dignissimos dolore error, esse laboriosam minus nam porro quam sapiente similique unde vel
                veritatis voluptate?
              </div>
              <div>A aliquam atque cupiditate deleniti distinctio ea eaque enim eos est excepturi fugit incidunt
                inventore magnam neque perspiciatis, possimus provident quaerat quasi quos repudiandae unde ut veritatis
                voluptate voluptatibus voluptatum!
              </div>
            </div>
            <div class="read">
              Lire l'article
            </div>
          </div>
          <div class="post">
            <div class="img">
              Dockerisation de mon projet Qwirk
            </div>
            <div class="date">
              31/07/2019
            </div>
            <div class="presentation">
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque autem cupiditate esse fugiat id
                natus nisi nulla, temporibus vel. Alias eum nam nemo odio quaerat repellendus, tempore velit vitae.
              </div>
              <div>Beatae blanditiis dolorum earum illo maxime possimus quae sapiente tempora? Consequuntur dicta,
                exercitationem facere libero nam non, numquam optio placeat reiciendis sit, ullam veniam. Dicta enim
                fuga possimus reprehenderit ut?
              </div>
              <div>Architecto hic mollitia natus quam voluptates. Accusamus aut cumque debitis delectus eaque, enim
                excepturi illo mollitia, neque non quae quam repudiandae sit suscipit, ullam veritatis voluptate. Culpa
                deleniti rem tempore.
              </div>
            </div>
            <div class="read">
              Lire l'article
            </div>
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
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div.post {
      display: flex;
      flex-direction: column;
      max-width: 450px;
      margin-bottom: 30px;
      border: solid #222 1px;
      background-color: #222;
      color: #CCC;
      border-radius: 2px;

      .img {
        background-image: url('../assets/img/linescode.jpg');
        color: #FFF;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
      }

      .date {
        text-align: right;
        font-size: 10px;
        margin-top: 5px;
        margin-right: 25px;
      }

      .presentation {
        padding: 15px 25px 20px;
        text-align: justify;
        line-height: 20px;
      }

      .read {
        color: #CCC;
        text-align: right;
        margin-right: 25px;
      }
    }
  }
</style>
