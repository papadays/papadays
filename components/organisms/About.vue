<template>
  <section :class="$options._componentTag">
    自己紹介文
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class About extends Vue {
}
</script>

<style lang="scss" scoped>
.About {
  padding: $padding-section-space;
}
</style>
