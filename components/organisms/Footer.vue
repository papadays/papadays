<template>
  <footer :class="$options._componentTag">

  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.Footer {
  grid-area: Footer;
  background-color: $color-footer-background;
  width: 100vw;
  margin: 0 auto;
}
</style>
