<template>
  <div id="app">
    <Header />
    <nuxt />
    <Aside />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, State, Vue } from 'nuxt-property-decorator';

import Header from '~/components/organisms/Header.vue';
import Aside from '~/components/organisms/Aside.vue';
import Footer from '~/components/organisms/Footer.vue';

@Component({
  components: {
    Header,
    Aside,
    Footer,
  },
})
export default class Default extends Vue {
}
</script>

<style lang="scss" scoped>
#app {
  display: grid;
  grid-gap: 20px $margin-section-space;
  margin: 0 auto;
  grid-template:
    "Header Header Header Header" #{$height-header}
    ". Main Aside ." auto
    "Footer Footer Footer Footer" #{$height-footer} /
    1fr #{$width-content-main} #{$width-content-aside} 1fr;

  @include responsive() {
    grid-gap: $margin-sp-space 0;
    grid-template:
      "Header" #{$height-header-sp}
      "Main" auto
      "Aside" auto
      "Footer" #{$height-footer-sp} /
      100%;
  }
}
</style>

