<template>
  <div id="app">
    <Header />
    <Nav />
    <nuxt />
    <Aside />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Header from '~/components/organisms/Header.vue';
import Nav from '~/components/organisms/Nav.vue';
import Aside from '~/components/organisms/Aside.vue';
import Footer from '~/components/organisms/Footer.vue';

@Component({
  layout: 'home',
  components: {
    Header,
    Nav,
    Aside,
    Footer,
  },
})
export default class Default extends Vue {}
</script>

<style lang="scss" scoped>
#app {
  @include setGridDefault();
}
</style>

