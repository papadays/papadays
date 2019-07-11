<template>
  <Link url="/articleList" :class="$options._componentTag">
    <span class="name">{{ category.name }}</span>
    <span class="count">{{ category.count }} 記事</span>
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

  &:hover {
    text-decoration: none;
    background-color: $color-content-primary;

    > .name,
    > .count {
      color: $color-text-white;
    }
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