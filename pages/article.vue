<template>
  <tmp-article />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import TmpArticle from '~/components/templates/Article.vue';

@Component({
  head() {
    return {
      title: 'article',
    };
  },
  components: {
    TmpArticle,
  },
})
export default class PagesArticle extends Vue {}
</script>
