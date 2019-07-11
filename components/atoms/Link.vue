<template>
  <nuxt-link :to="url" :class="$options._componentTag">
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Link extends Vue {
  @Prop({
    required: true,
  }) url!: string;
}
</script>

<style lang="scss" scoped>
.Link {
  width: fit-content;
  height: fit-content;
  line-height: 1;

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
