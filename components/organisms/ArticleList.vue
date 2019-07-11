<template>
  <ul :class="$options._componentTag">
    <li v-for="article in articleList" v-bind:key="article.id">
      <ArticleCard
        :article="article"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Article } from '~/types';

import ArticleCard from '~/components/molcules/ArticleCard.vue';

@Component({
  components: {
    ArticleCard,
  },
})
export default class ArticleList extends Vue {
  @Prop({
    required: true,
  }) articleList!: Article[];
}
</script>
