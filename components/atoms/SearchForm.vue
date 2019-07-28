<template>
  <form
    :class="$options._componentTag"
    :action="URL"
    method="get"
  >
    <input class="input" type="text" placeholder="検索キーワード" v-model="searchWord">
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
  private searchWord: string = '';

  public get URL(): string {
    return `/searchWordList?searchWord=${this.searchWord}`;
  }
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
    outline: none;
    box-shadow: none;
    color: $color-text-primary;
    border-right: 0;
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