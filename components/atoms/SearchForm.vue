<template>
  <form
    :class="$options._componentTag"
    action="/keywordList"
    method="get"
  >
    <input class="input" type="text" placeholder="検索キーワード" name="keyword" :value="$route.query.keyword">
    <Button
      label="検 索"
      class="is-small"
      type="submit"
    />
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

import Button from '~/components/atoms/Button.vue';

const constants = require('~/plugins/my-constants');

@Component({
  components: {
    Button,
  },
})
export default class SearchForm extends Vue {
}
</script>

<style lang="scss" scoped>
.SearchForm {
  display: flex;

  > .input {
    width: 80%;
    height: 100%;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: solid 1px $color-border-primary;
    outline: none;
    box-shadow: none;
    box-sizing: border-box;
    color: $color-text-primary;
    border-right: 0;
    box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
    font-size: $font-size-default;
    padding: 0 10px;
  }

  & ::v-deep .Button {
    width: 20%;
    height: 100%;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    transition: opacity $transition-speed-default;

    &:hover {
      opacity: $opacity-link-hover;
    }
  }
}
</style>