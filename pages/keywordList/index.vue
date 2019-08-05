<template>
  <ArticleList
    :title="`「${$route.query.keyword}」の検索結果 （${articleListKeyword.length}件）`"
    :articleList="articleListKeyword"
  />
</template>

<script lang='ts'>
import { Component, State, Vue } from 'nuxt-property-decorator';
import axios from 'axios';
import { Article } from '~/types';
import ArticleList from '~/components/templates/ArticleList.vue';

@Component({
  head() {
    return {
      title: '記事一覧',
    };
  },
  components: {
    ArticleList,
  },
  async created() {
    this.$store.dispatch('putArticleListKeyword', { keyword: this.$route.query.keyword });
  },
})
export default class KeywordList extends Vue {
  @State articleListKeyword!: Article[];
}
</script>
