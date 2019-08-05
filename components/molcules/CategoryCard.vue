<template>
  <Link :url="`/categoryList/${category.id}?category=${category.name}`" :class="$options._componentTag">
    <span class="name" v-cloak>{{ category.name }}</span>
    <span class="count" v-cloak>{{ category.count }} 記事</span>
  </Link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Category } from '~/types';

import Link from '~/components/atoms/Link.vue';

@Component({
  components: {
    Link,
  },
})
export default class CategoryCard extends Vue {
  @Prop({
    required: true,
  }) category!: Category;
}
</script>

<style lang="scss" scoped>
.CategoryCard {
  display: flex;
  justify-content: flex-start;
  padding: $padding-section-space;
  width: 100%;
  transition: background-color $transition-speed-default;
  box-sizing: border-box;

  &:hover {
    text-decoration: none;
    background-color: $color-background-aside;
  }

  > .name,
  > .count {
    text-decoration: none;
  }

  > .name {
    font-size: $font-size-default;
    color: $color-text-primary;
  }

  > .count {
    font-size: $font-size-notes;
    color: $color-text-secondary;
    margin-left: auto;
  }
}
</style>
