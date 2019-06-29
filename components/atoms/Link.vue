<template>
  <nuxt-link :to="url">
    <img v-if="icon" :src="icon">
    <span>{{ label }}</span>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class Link extends Vue {
  @Prop({
    required: true
  }) url!: string

  @Prop({
    default: ''
  }) icon!: string

  @Prop({
    default: ''
  }) label!: string
}
</script>

<style lang="scss" scoped>
a {
  width: fit-content;
  height: fit-content;

  &:hover {
    > img {
      opacity: 0.8;
    }

    > span {
      text-decoration: underline;
    }
  }
}
</style>
