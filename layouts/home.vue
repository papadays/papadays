<template>
  <div id="app">
    <Header />
    <nuxt />
    <Aside />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import Header from "~/components/organisms/Header.vue";
import Aside from "~/components/organisms/Aside.vue";
import Footer from "~/components/organisms/Footer.vue";

@Component({
  head() {
    return {
      title: 'home'
    }
  },
  layout: 'home',
  components: {
    Header,
    Aside,
    Footer
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
#app {
  @include setGridDefault(true);

  > .Header {
    > a {
      > img {
        width: 305px;
        height: 60px;
      }
    }
  }
}
</style>
