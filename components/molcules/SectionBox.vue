<template>
  <section :class="$options._componentTag">
    <slot />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class SectionBox extends Vue {}
</script>
