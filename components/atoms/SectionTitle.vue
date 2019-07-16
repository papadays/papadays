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
  position: relative;
  padding: $padding-text-space;
  background: $color-content-primary;
  color: #fff;
  font-weight: bold;
  font-size: $font-size-h1;
  line-height: 1;

  &::after {
    position: absolute;
    content: "";
    top: 100%;
    left: 30px;
    border: 15px solid transparent;
    border-top: 15px solid $color-content-primary;
    width: 0;
    height: 0;
  }
}
</style>
