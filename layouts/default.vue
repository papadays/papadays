<template>
  <div id="app">
    <org-header />
    <org-nav />
    <nuxt />
    <org-aside />
    <org-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OrgHeader from "~/components/organisms/Header.vue";
import OrgNav from "~/components/organisms/Nav.vue";
import OrgAside from "~/components/organisms/Aside.vue";
import OrgFooter from "~/components/organisms/Footer.vue";

@Component({
  layout: 'home',
  components: {
    OrgHeader,
    OrgNav,
    OrgAside,
    OrgFooter
  }
})
export default class Default extends Vue {}
</script>

<style lang="scss" scoped>
#app {
  @include setGridDefault();
}
</style>

