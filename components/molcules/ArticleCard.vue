<template>
  <article :class="$options._componentTag">
    <img class="eyecatch" :src="article._embedded['wp:featuredmedia'][0].source_url" />
    <div class="info">
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
    </div>
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > .eyecatch {
    width: 100%;
    height: 150px;
  }

  & > .info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: $margin-item-space-default;

    & > .postdate,
    & > .update {
      font-size: $font-size-notes;
      margin-left: $margin-item-space-default;
      color: $color-text-option;
      font-weight: bold;
    }

    & > .postdate {
      margin-left: auto;
    }
  }

  & > .title {
    line-height: $font-size-h1;
    margin: $margin-item-space-default auto;
    width: 100%;

    & ::v-deep .Link {
      font-size: $font-size-h1;
      color: $color-text-primary;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  & ::v-deep .TagList {
    padding: 0;
    margin-top: auto;
  }
}
</style>
