<template>
  <article :class="$options._componentTag">
    <div class="eyecatch">
      <img class="image" :src="article._embedded['wp:featuredmedia'][0].source_url" />
    </div>
    <header class="header">
      <CategoryIcon
        :category="article._embedded['wp:term'][0][0]"
      />
      <span class="postdate">
        <i class="fas fa-pencil-alt"></i>
        {{ article.date | format-date }}
      </span>
      <span class="update">
        <i class="fas fa-redo"></i>
        {{ article.modified | format-date }}
      </span>
    </header>
    <h1 class="title">
      <Link :url="`/article?id=${article.id}`">
        {{ article.title.rendered }}
      </Link>
    </h1>
    <TagList
      :tagList="article._embedded['wp:term'][1]"
    />
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
}
</script>

<style lang="scss" scoped>
.ArticleCard {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & > .eyecatch {
    width: 100%;
    height: 150px;
    overflow: hidden;

    & > .image {
      width: 100%;
    }
  }

  & > .header {
    display: flex;
    align-items: center;
    margin-top: $margin-item-space-default;

    & > .postdate,
    & > .update {
      font-size: $font-size-notes;
      margin-left: $margin-item-space-default;
      color: $color-text-option;
      font-weight: bold;
    }
  }

  & > .title {
    line-height: $font-size-h1;
    margin: $margin-item-space-default auto 0;
    display: inline-block;

    &:hover {
      text-decoration: underline;
    }

    & ::v-deep .Link {
      font-size: $font-size-h1;
      color: $color-text-primary;
    }
  }

  & ::v-deep .TagList {
    padding: 0;
    margin-top: $margin-item-space-default;
  }
}
</style>
