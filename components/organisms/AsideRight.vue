<template>
  <aside>aside right component</aside>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class AsideRight extends Vue {}
</script>

<style lang="scss" scoped>
aside {
  grid-area: right;
}
</style>
