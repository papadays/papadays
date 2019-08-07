<template>
  <main :class="$options._componentTag">
    <SectionBox>
      <SectionTitle :label="article.title" />
      <CategoryIcon class="icon" :category="categoryData" />
      <p class="date">
        <span class="item" v-cloak>
          <i class="fas fa-pencil-alt"></i>
          {{ article.date | format-date }}
        </span>
        <span class="item" v-cloak>
          <i class="fas fa-redo-alt"></i>
          {{ article.modified | format-date }}
        </span>
      </p>
      <TagList :tagList="tagData" />
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
import CategoryIcon from '~/components/atoms/CategoryIcon.vue';
import TagList from '~/components/organisms/TagList.vue';

const prism = require('~/plugins/lib/prism');

@Component({
  components: {
    SectionTitle,
    ArticleContent,
    SectionBox,
    SectionContent,
    CategoryIcon,
    TagList,
  },
  updated() {
    prism.default.highlightAll();
  },
})
export default class ArticleTemp extends Vue {
  @State article!: Article;

  private get categoryData(): object {
    if (!this.article._embedded) return {};
    return this.article._embedded['wp:term'][0][0];
  }

  private get tagData(): object {
    if (!this.article._embedded) return {};
    return this.article._embedded['wp:term'][1];
  }
}
</script>

<style lang="scss" scoped>
.Article {
  grid-area: Main;

  & ::v-deep .SectionBox {
    & > .SectionTitle {
      margin-bottom: $margin-item-space-default;
    }

    & > .CategoryIcon {
      margin-right: $margin-item-space-default;

      @include responsive() {
        margin-left: $margin-sp-space;
      }
    }

    & > .date {
      color: $color-text-secondary;
      font-size: $font-size-notes;
      display: inline-block;
      margin-bottom: $margin-item-space-default;

      & > .item {
        &:first-child {
          margin-right: $margin-item-space-small;
        }
      }
    }

    & > .TagList {
      padding: 0;
      margin-bottom: $margin-section-space;

      @include responsive() {
        margin-left: $margin-sp-space;
      }

      & > .TagIcon {
        margin: 5px 3px 0 0;
      }
    }
  }
}
</style>
