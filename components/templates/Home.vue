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

@Component({
  components: {
    OrgArticleList
  }
})
export default class Home extends Vue {
  @Prop({
    required: true
  }) recentList!: Array<Object>;
}
</script>

<style lang="scss" scoped>
main {
  grid-area: main;
}
</style>
