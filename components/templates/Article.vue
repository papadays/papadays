<template>
  <main>
    <org-article-list
      :articleList="recentList"
    />
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import OrgArticleList from "~/components/organisms/ArticleList.vue";
import { Article } from "~/types";

@Component({
  components: {
    OrgArticleList
  }
})
export default class ArticleTmp extends Vue {
  @Prop({
    required: true
  }) recentList!: Article[];
}
</script>
