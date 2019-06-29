<template>
  <aside>aside left component</aside>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class AsideLeft extends Vue {}
</script>

<style lang="scss" scoped>
aside {
  grid-area: left;
}
</style>
