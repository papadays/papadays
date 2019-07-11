<template>
  <main :class="$options._componentTag">
    <ArticleList
      :articleList="recentList"
    />
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import ArticleList from '~/components/organisms/ArticleList.vue';
import { Article } from '~/types';

@Component({
  components: {
    ArticleList,
  },
})
export default class ArticleTmp extends Vue {
  @Prop({
    required: true,
  }) recentList!: Article[];
}
</script>

<style lang="scss" scoped>
.ArticleTmp {
  grid-area: Main;
}
</style>
