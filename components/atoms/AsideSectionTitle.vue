<template>
  <h1 :class="$options._componentTag">
    <i :class="fasClass" v-if="fasClass"></i>
    {{ label }}
  </h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class AsideSectionTitle extends Vue {
  @Prop({
    default: '',
  }) label!: string;
  @Prop({
    default: '',
  }) fasClass!: string;
}
</script>

<style lang="scss" scoped>
.AsideSectionTitle {
  font-weight: bold;
  font-size: $font-size-default;
  line-height: 1;
  padding: $padding-text-space;
}
</style>