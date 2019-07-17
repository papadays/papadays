<template>
  <section :class="$options._componentTag">
    パパとしての経歴
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
