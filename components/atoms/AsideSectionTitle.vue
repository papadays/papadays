<template>
  <h1 :class="$options._componentTag" v-cloak>
    <i class="fasIcon" :class="fasClass" v-if="fasClass"></i>
    <img class="icon" :src="icon" v-if="icon" />
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
  @Prop({
    default: '',
  }) icon!: string;
}
</script>

<style lang="scss" scoped>
.AsideSectionTitle {
  font-weight: bold;
  font-size: $font-size-default;
  line-height: 1;
  padding: $padding-text-space;
  border-bottom: dashed 3px $color-border-secondary;
  background-image:
    -webkit-gradient(
      linear, 0 0, 100% 100%,
      color-stop(.25, $color-border-secondary),
      color-stop(.25, transparent),
      color-stop(.5, transparent),
      color-stop(.5, $color-border-secondary),
      color-stop(.75, $color-border-secondary),
      color-stop(.75, transparent),
      to(transparent)
    );
  background-size: 8px 8px;
  display: flex;
  align-items: center;

  & > .icon,
  & > .fasIcon {
    margin-right: $margin-item-space-default;
  }
}
</style>