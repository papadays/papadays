<template>
  <Link url="/categoryList" :class="$options._componentTag">
    <span class="name">
      <i class="fas fa-folder-open"></i>
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
  padding: $padding-icon-space;
  border: solid 1px $color-content-primary;
  border-radius: $border-radius-content;

  &:hover {
    background-color: $color-content-primary;
    color: $color-text-white;
    text-decoration: none;

    > .name {
      text-decoration: none;
    }
  }
}
</style>