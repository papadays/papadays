<template>
  <h1 :class="$options._componentTag">{{ label }}</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class SectionTitle extends Vue {
  @Prop({
    default: '',
  }) label!: string;
}
</script>

<style lang="scss" scoped>
.SectionTitle {
  padding: $padding-text-space;
  background: $color-content-primary;
  color: #fff;
  font-weight: bold;
  font-size: $font-size-title;
  line-height: 1;
}
</style>
