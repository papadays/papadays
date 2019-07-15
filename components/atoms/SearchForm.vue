<template>
  <form
    :class="$options._componentTag"
    :action="URL"
    method="get"
  >
    <input class="input is-rounded" type="text" placeholder="検索キーワード" v-model="searchWord">
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
  position: relative;

  > .input {
    &.is-rounded {
      width: 100%;
    }
  }

  & /deep/ .Button {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 4px;
    margin: auto;
  }
}
</style>