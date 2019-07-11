<template>
  <header :class="$options._componentTag">
    <Link url="/">
      <img :src="logoMain" />
    </Link>
    <input class="input is-rounded" type="text" placeholder="検索キーワード">
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import Link from '~/components/atoms/Link.vue';

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
.Header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: Header;
  border-bottom: solid 1px $color-border-secondary;
  padding: 0 calc((100vw - #{$width-content-max}) / 2);

  > .input {
    &.is-rounded {
      width: 250px;
    }
  }
}
</style>
