<template>
  <nav :class="$options._componentTag">nav component</nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Nav extends Vue {}
</script>

<style lang="scss" scoped>
.Nav {
  grid-area: Nav;
}
</style>