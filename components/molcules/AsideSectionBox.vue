<template>
  <section :class="$options._componentTag">
    <slot />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class AsideSectionBox extends Vue {}
</script>

<style lang="scss" scoped>
.AsideSectionBox {
  background-color: $color-aside-background;
  border-radius: $border-radius-content;
}
</style>