<template>
  <Link url="/categoryList" :class="$options._componentTag">
    <span class="name">
      {{ category.name }}
    </span>
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
export default class CategoryIcon extends Vue {
  @Prop({
    required: true,
  }) category!: Category;
}
</script>

<style lang="scss" scoped>
.CategoryIcon {
  font-size: $font-size-notes;
  color: $color-text-primary;
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  transition: background-color $transition-speed-default;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);

    & > .name {
      background-color: lighten($color-background-category, 2%);
    }
  }

  & > .name {
    padding: $padding-icon-space;
    font-size: $font-size-icon;
    text-align: center;
    background-color: $color-background-category;
    font-weight: bold;
    text-decoration: none;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
