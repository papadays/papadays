<template>
  <ul :class="$options._componentTag">
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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > .item {
    padding: $padding-section-space;
    width: 50%;
  }
}
</style>
