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
  background-color: #fff;
  border: dashed 3px $color-border-secondary;
}
</style>
