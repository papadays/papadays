<template>
  <main :class="$options._componentTag">
    <SectionBox>
      <SectionTitle :label="article.title" />
      <SectionContent>
        <ArticleContent
          :content="article.content"
        />
      </SectionContent>
    </SectionBox>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue, State } from 'nuxt-property-decorator';
import { Article } from '~/types';
import SectionTitle from '~/components/atoms/SectionTitle.vue';
import ArticleContent from '~/components/atoms/ArticleContent.vue';
import SectionBox from '~/components/molcules/SectionBox.vue';
import SectionContent from '~/components/molcules/SectionContent.vue';

const prism = require('~/plugins/lib/prism');

@Component({
  components: {
    SectionTitle,
    ArticleContent,
    SectionBox,
    SectionContent,
  },
  updated() {
    prism.default.highlightAll();
  },
})
export default class ArticleTemp extends Vue {
  @State article!: Article;
}
</script>

<style lang="scss" scoped>
.Article {
  grid-area: Main;

  & ::v-deep .SectionTitle {
    margin-bottom: 30px;
  }
}
</style>
