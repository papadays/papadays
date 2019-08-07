<template>
  <header :class="$options._componentTag">
    <Link url="/">
      <img :src="logoMain" class="logo" />
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
  align-items: flex-end;
  grid-area: Header;
  padding: 0 calc((100% - #{$width-content-max}) / 2);
  box-sizing: border-box;

  @include responsive() {
    padding: 0 $padding-sp-space;
  }

  & ::v-deep .Link {
    & > .logo {
      @include responsive() {
        width: 155px;
      }
    }
  }

  & ::v-deep .SearchForm {
    width: 300px;
    height: 36px;

    @include responsive() {
      width: 50%;
      height: 30px;
    }

    & ::v-deep .Button {
      border-radius: 18px;

      @include responsive() {
        border-radius: 13px;
      }
    }
  }
}
</style>
