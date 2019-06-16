<template>
  <div class="container projects">
    <section class="skills">
      <div class="parallax">
        <h2><span class="initials">P</span>rojets</h2>
      </div>
    </section>

    <div class="outContent">
      <div class="content">
        <div id="projects">
          <ul>
            <li>
              <figure class="project red"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample6.jpg" alt="sq-sample6"/>
                <figcaption>
                  <h2>Statics <span>Websites</span></h2>
                </figcaption>
                <router-link to="/project/statics-websites"></router-link>
              </figure>
            </li>
            <li>
              <figure class="project green"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample14.jpg" alt="sq-sample14"/>
                <figcaption>
                  <h2>Annalee <span>Weis</span></h2>
                </figcaption>
                <a href="#"></a>
              </figure>
            </li>
            <li>
              <figure class="project navy"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample10.jpg" alt="sq-sample10"/>
                <figcaption>
                  <h2>Carmen <span>Glenn</span></h2>
                </figcaption>
                <a href="#"></a>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Projects extends Vue {
  }
</script>

<style lang="scss">
  @import "../assets/style/variables.scss";

  div.container.projects {
    margin-top: 0;

    div.parallax {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;
      width: 100%;
      background-image: url('../assets/img/linescode.jpg');
      background-size: cover;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }

    section.skills > div.parallax > h2 {
      font-size: 52px;
      color: #FFF;
      text-transform: uppercase;
      margin-top: 50px;
    }

    // projects

    div#projects {
      display: flex;
      justify-content: center;

      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;

        li {
          height: 300px;
          width: 300px;
          margin: 30px;

          figure.project {
            font-family: 'Raleway', Arial, sans-serif;
            position: relative;
            display: inline-block;
            margin: 10px 5px;
            min-width: 220px;
            max-width: 310px;
            max-height: 310px;
            width: 100%;
            overflow: hidden;
            text-align: center;
            background: $black;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
            border-radius: 50%;

            &:hover > img {
              opacity: 1;
            }

            a {
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              position: absolute;
            }

            * {
              -webkit-transition: all 0.35s ease-in-out;
              transition: all 0.35s ease-in-out;
            }

            img {
              opacity: 0.25;
              max-width: 100%;
              position: relative;
              top: 0;
              left: 0;
            }

            &:hover > figcaption,
            .hover > figcaption {
              -webkit-transform: rotate(-45deg) translateY(-50%) scale(0.9);
              transform: rotate(-45deg) translateY(-50%) scale(0.9);
            }

            figcaption {
              position: absolute;
              top: 50%;
              left: 30px;
              right: 30px;
              -webkit-transform: rotate(0deg) translateY(-50%) scale(1);
              transform: rotate(0deg) translateY(-50%) scale(1);
              -webkit-transform-origin: center 0;
              transform-origin: center 0;

              &:before, &:after {
                background-color: rgba(255, 255, 255, 0.8);
                width: 100%;
                height: 2px;
                position: absolute;
                content: "";
                display: block;
                -webkit-transition: all 0.35s ease-in-out;
                transition: all 0.35s ease-in-out;
              }

              &:before {
                left: 0;
                top: 0;
              }

              &:after {
                bottom: 0;
                right: 0;
              }

              h2 {
                top: 50%;
                letter-spacing: -1px;
                color: #ffffff;
                text-transform: uppercase;
                padding: 10px 0;
                margin: 0;
                font-weight: 400;

                span { font-weight: 800; }
              }
            }

          }
          figure.project.hover > img {
            opacity: 1;
          }

          figure.project.blue { background: #091b27; }

          figure.project.red { background: #2e0e0a; }

          figure.project.yellow { background: #4f3204; }

          figure.project.green { background: #061c10; }

          figure.project.navy { background: $black; }
        }
      }
    }

    figure.project:hover > figcaption:before,
    figure.project.hover > figcaption:before,
    figure.project:hover > figcaption:after,
    figure.project.hover > figcaption:after {
      width: 200%;
    }
  }
</style>
