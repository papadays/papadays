<template>
  <ul :class="$options._componentTag">
    <li class="notfound" v-if="!articleList.length">該当する記事が見つかりませんでした。</li>
    <li class="item" v-for="article in articleList" v-bind:key="article.id">
      <ArticleCard
        :article="article"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Article } from '~/types';

import ArticleCard from '~/components/molcules/ArticleCard.vue';

@Component({
  components: {
    ArticleCard,
  },
})
export default class ArticleList extends Vue {
  @Prop({
    required: true,
  }) articleList!: Article[];
}
</script>

<style lang="scss" scoped>
.ArticleList {
  & > .notfound {
    margin: $margin-section-space * 2 0;
    font-size: $font-size-large;
    text-align: center;
  }
  & > .item {
    width: 100%;
    margin-top: $margin-list-space;
  }
}
</style>
