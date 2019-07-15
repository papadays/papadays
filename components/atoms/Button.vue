<template>
  <button :type="type" class="button" :class="$options._componentTag">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({
    required: true,
  }) label!: string;

  @Prop({
    default: 'button',
  }) type!: string;
}
</script>

<style lang="scss" scoped>
.Button {
  padding: $padding-button-space;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $color-content-secondary;
  color: #fff;
  font-weight: bold;
  outline: none;
  border: 0;
}
</style>
