<template>
  <header>
    <atm-link
      url="/"
      :icon="logoMain"
    />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import AtmLink from "~/components/atoms/Link.vue";
import AtmFontAwesome from "~/components/atoms/FontAwesome.vue";

@Component({
  components: {
    AtmLink,
    AtmFontAwesome,
  }
})
export default class Header extends Vue {
  logoMain = require('~/assets/img/logo-main.svg');
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
