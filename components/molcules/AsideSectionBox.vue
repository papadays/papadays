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

  &.-subcontent {
    border: 0;
    position: relative;
    padding: $padding-text-space;
    border-top: solid 2px black;
    border-bottom: solid 2px black;
    background-color: transparent;

    &:before,
    &::after {
      content: '';
      position: absolute;
      top: -10px;
      width: 2px;
      height: -webkit-calc(100% + 20px);
      height: calc(100% + 20px);
      background-color: black;
    }

    &::before {
      left: 10px;
    }

    &::after {
      right: 10px;
    }

    & .text {
      margin: 0; 
      padding: 0;
    }

    & ::v-deep .AsideSectionTitle {
      background-image: none;
      border: 0;
      padding-top: 0;
      padding-bottom: 0;
    }
  }
}
</style>
