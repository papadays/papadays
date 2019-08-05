<template>
  <main :class="$options._componentTag">
    <SectionBox>
      <SectionTitle :label="title" />
      <SectionContent>
        <ArticleList :articleList="articleList" />
      </SectionContent>
    </SectionBox>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue, State } from 'nuxt-property-decorator';
import { Article } from '~/types';
import ArticleList from '~/components/organisms/ArticleList.vue';
import SectionTitle from '~/components/atoms/SectionTitle.vue';
import ArticleContent from '~/components/atoms/ArticleContent.vue';
import SectionBox from '~/components/molcules/SectionBox.vue';
import SectionContent from '~/components/molcules/SectionContent.vue';

const prism = require('~/plugins/lib/prism');

@Component({
  components: {
    ArticleList,
    SectionTitle,
    ArticleContent,
    SectionBox,
    SectionContent,
  },
})
export default class ArticleListTemp extends Vue {
  @Prop({
    required: true,
  }) title!: string;

  @Prop({
    default: '',
  }) articleList!: Article[];
}
</script>

<style lang="scss" scoped>
.ArticleList {
  grid-area: Main;

  & .count {
    margin-top: $margin-item-space-default;
    font-size: $font-size-large;
  }
}
</style>
