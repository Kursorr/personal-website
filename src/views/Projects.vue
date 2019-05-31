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
