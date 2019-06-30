<template>
  <div id="app">
    <org-header />
    <nuxt />
    <org-aside />
    <org-footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import OrgHeader from "~/components/organisms/Header.vue";
import OrgAside from "~/components/organisms/Aside.vue";
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
    OrgAside,
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
