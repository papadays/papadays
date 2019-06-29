<template>
  <tmp-home
    :recentList="recentList"
    :article="article"
  />
</template>

<script lang="ts">
import { Component, State, Vue } from "nuxt-property-decorator";
import TmpHome from "~/components/templates/Home.vue";
import { Article } from "~/types";

@Component({
  head() {
    return {
      title: 'ホーム'
    }
  },
  layout: 'home',
  components: {
    TmpHome
  },
  created() {
    this.$store.dispatch('article/getArticle')
    this.$store.dispatch('article/getArticleListRecent')
  },
})
export default class PagesHome extends Vue {
  @State article!: Article
  @State recentList!: Article[]
}
</script>
