<template>
  <Article />
</template>

<script lang="ts">
import { Component, State, Vue } from 'nuxt-property-decorator';
import Article from '~/components/templates/Article.vue';

@Component({
  head() {
    return {
      title: 'article',
    };
  },
  components: {
    Article,
  },
  async created() {
    await this.$store.dispatch('putArticle', { id: this.$route.query.id });
  },
})
export default class ArticlePage extends Vue {
}
</script>
