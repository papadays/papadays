<template>
  <footer :class="$options._componentTag">
    &copy; 2019 papadays.com
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
  width: 100%;
  margin: 0 auto;
  color: $color-text-secondary;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
}
</style>
