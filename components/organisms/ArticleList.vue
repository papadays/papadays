<template>
  <ul>
    <li v-for="article in articleList" v-bind:key="article.id">
      {{ article.title }}
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class ArticleList extends Vue {
  @Prop({
    default: false
  }) isHome!: Boolean;
  @Prop({
    required: true
  }) articleList!: Array<Object>;
}
</script>
