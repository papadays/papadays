<template>
  
  <nuxt-link :class="$options._componentTag"
    v-scroll-to="'.Header'"
  to>
    <i class="fas fa-arrow-alt-circle-up"></i>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class ButtonScrollTop extends Vue {
}
</script>

<style lang="scss" scoped>
.ButtonScrollTop {
  position: fixed;
  bottom: 30px;
  right: 30px;
  font-size: 50px;
  color: $color-content-secondary;
  cursor: pointer;
  transition: opacity $transition-speed-default;

  @include responsive() {
    display: none;
  }

  &:hover {
    opacity: $opacity-link-hover;
  }
}
</style>
