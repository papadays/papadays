<template>
  <header :class="$options._componentTag">
    <Link url="/">
      <img :src="logoMain" />
    </Link>
    <SearchForm />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import Link from '~/components/atoms/Link.vue';
import SearchForm from '~/components/atoms/SearchForm.vue';

@Component({
  components: {
    Link,
    SearchForm,
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

  & /deep/ .SearchForm {
    width: 300px;
    height: 36px;

    & /deep/ .Button {
      height: 28px;
      border-radius: 14px;
    }
  }
}
</style>
