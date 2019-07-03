<template>
  <main>
    <h2>最近の投稿</h2>
    <ArticleList
      :articleList="articleListRecent"
    />
  </main>
</template>

<script lang="ts">
import { Component, State, Vue } from "nuxt-property-decorator";
import { Article } from "~/types";

import ArticleList from "~/components/organisms/ArticleList.vue";

@Component({
  components: {
    ArticleList
  }
})
export default class Home extends Vue {
  @State articleListRecent!: []
}
</script>
