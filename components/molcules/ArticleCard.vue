<template>
  <article :class="$options._componentTag">
    <div class="category">
      <img class="eyecatch" :src="getImgSrc(article._embedded['wp:term'][0][0].slug)" />
      <CategoryIcon class="icon" :category="article._embedded['wp:term'][0][0]" />
    </div>
    <div class="detail">
      <header class="info">
        <span class="date">
          <span v-if="isHome()" v-cloak>
            <i class="fas fa-pencil-alt"></i>
            {{ article.date | calc-days }}
          </span>
          <span v-if="!isHome()" v-cloak>
            <i class="fas fa-pencil-alt"></i>
            {{ article.date | format-date }}
          </span>
        </span>
      </header>
      <h1 class="title">
        <Link :url="`/article/${article.id}`" v-cloak>
          {{ article.title.rendered }}
        </Link>
      </h1>
      <TagList
        :tagList="article._embedded['wp:term'][1]"
      />
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Article } from '~/types';

import Link from '~/components/atoms/Link.vue';
import CategoryIcon from '~/components/atoms/CategoryIcon.vue';
import TagList from '~/components/organisms/TagList.vue';

const constants = require('~/plugins/my-constants.js');

@Component({
  components: {
    Link,
    CategoryIcon,
    TagList,
  },
})
export default class ArticleCard extends Vue {
  @Prop({
    required: true,
  }) article!: Article;

  private getImgSrc(slug: string): string {
    return `${constants.IMG_PATH}eyecatch-${slug}.jpg`;
  }

  private isHome():boolean {
    return this.$route.name === 'index';
  }
}
</script>

<style lang="scss" scoped>
.ArticleCard {
  width: 100%;
  height: 100%;
  display: flex;

  & > .category {
    width: 100px;
    min-width: 100px;
    min-height: 100px;
    position: relative;

    & > .eyecatch {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }

    & ::v-deep .CategoryIcon {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      margin: auto;

      & > .name {
        top: calc((100% - 100px) / 2);
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }

  & > .detail {
    display: flex;
    flex-direction: column;
    padding: 0 $padding-section-space;
    
    & > .info {
      display: flex;
      font-size: $font-size-notes;
      color: $color-text-secondary;
      font-weight: bold;
    }
    
    & > .title {
      font-size: $font-size-title;
      word-break: break-all;
      margin: $margin-item-space-small 0;

      &:hover {
        & .Link {
          color: $color-content-secondary;
        }
      }

      & .Link {
        color: $color-text-primary;
        text-decoration: none;
        transition: color $transition-speed-default;
      }
    }

    & ::v-deep .TagList {
      padding: 0;
      margin-top: auto;

      & .TagIcon {
        margin: $margin-item-space-small $margin-item-space-small 0 0;
      }
    }
  }
}
</style>
