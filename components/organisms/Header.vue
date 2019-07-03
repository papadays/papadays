<template>
  <header :class="$options._componentTag">
    <Link
      url="/"
      :icon="logoMain"
    />
    <input class="input is-rounded" type="text" placeholder="検索キーワード">
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import Link from "~/components/atoms/Link.vue";

@Component({
  components: {
    Link,
  },
})
export default class Header extends Vue {
  logoMain = require('~/assets/img/logo-main.svg');
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > .input {
    &.is-rounded {
      width: 250px;
    }
  }
}
</style>
