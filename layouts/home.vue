<template>
  <div id="app">
    <org-header />
    <org-aside-left />
    <nuxt />
    <org-aside-right />
    <org-footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import OrgHeader from "~/components/organisms/Header.vue";
import OrgAsideLeft from "~/components/organisms/AsideLeft.vue";
import OrgAsideRight from "~/components/organisms/AsideRight.vue";
import OrgFooter from "~/components/organisms/Footer.vue";

@Component({
  head() {
    return {
      title: 'home'
    }
  },
  layout: 'home',
  components: {
    OrgHeader,
    OrgAsideLeft,
    OrgAsideRight,
    OrgFooter
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
#app {
  @include setGridDefault(true);
}
</style>
