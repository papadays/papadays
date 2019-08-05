<template>
  <Article />
</template>

<script lang="ts">
import { Component, State, Vue } from 'nuxt-property-decorator';
import Article from '~/components/templates/Article.vue';

@Component({
  head() {
    const article = this.$store.state.article;
    return {
      title: article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: String(article.excerpt).replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, ''),
        },
      ],
    };
  },
  components: {
    Article,
  },
  async created() {
    await this.$store.dispatch('putArticle', { id: this.$route.params.id });
  },
})
export default class ArticlePage extends Vue {
  getRemoveHtml(html: string): string {
    return Vue.filter('remove-html')(html);
  }
}
</script>
