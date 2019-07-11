<template>
  <div :class="$options._componentTag">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class AsideSectionContent extends Vue {}
</script>
