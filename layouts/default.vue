<template>
  <div id="app">
    <org-header />
    <org-nav />
    <org-aside-left />
    <nuxt />
    <org-aside-right />
    <org-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import OrgHeader from "~/components/organisms/Header.vue";
import OrgNav from "~/components/organisms/Nav.vue";
import OrgAsideLeft from "~/components/organisms/AsideLeft.vue";
import OrgAsideRight from "~/components/organisms/AsideRight.vue";
import OrgFooter from "~/components/organisms/Footer.vue";

@Component({
  layout: 'home',
  components: {
    OrgHeader,
    OrgNav,
    OrgAsideLeft,
    OrgAsideRight,
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

