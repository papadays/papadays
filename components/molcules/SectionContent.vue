<template>
  <div :class="$options._componentTag">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class SectionContent extends Vue {}
</script>

<style lang="scss" scoped>
.SectionContent {
  padding: $padding-section-space;
}
</style>
