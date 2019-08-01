<template>
  <ArticleList
    :articleList="articleListTag"
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
    this.$store.dispatch('putArticleListTag', { id: this.$route.params.id });
  },
})
export default class TagListPage extends Vue {
  @State articleListTag!: Article[];
}
</script>
