<template>
  <main :class="$options._componentTag">
    <SectionBox>
      <SectionTitle :label="article.title" />
      <SectionContent>
        <article v-html="article.content"></article>
      </SectionContent>
    </SectionBox>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue, State } from 'nuxt-property-decorator';
import { Article } from '~/types';

import SectionBox from '~/components/molcules/SectionBox.vue';
import SectionTitle from '~/components/atoms/SectionTitle.vue';
import SectionContent from '~/components/molcules/SectionContent.vue';

@Component({
  components: {
    SectionBox,
    SectionTitle,
    SectionContent,
  },
})
export default class ArticleTemp extends Vue {
  @State article!: Article;
}
</script>

<style lang="scss" scoped>
.Article {
  grid-area: Main;
}
</style>
