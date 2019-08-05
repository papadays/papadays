<template>
  <ArticleList
    :title="`「${$route.query.category}」カテゴリーの記事一覧`"
    :articleList="articleListCategory"
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
    this.$store.dispatch('putArticleListCategory', { id: this.$route.params.id });
  },
})
export default class CategoryListPage extends Vue {
  @State articleListCategory!: Article[];
}
</script>
