<template>
  <Link :url="`/tagList/${tag.id}?tag=${tag.name}`" :class="$options._componentTag">
    <span class="name" v-cloak>{{ tag.name }}</span>
  </Link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Tag } from '~/types';

import Link from '~/components/atoms/Link.vue';

@Component({
  components: {
    Link,
  },
})
export default class TagIcon extends Vue {
  @Prop({
    required: true,
  }) tag!: Tag;
}
</script>

<style lang="scss" scoped>
.TagIcon {
  background-color: $color-content-secondary;
  color: $color-text-white;
  padding: 5px 8px 5px 20px;
  font-size: $font-size-icon;
  border-radius: $border-radius-content;
  font-weight: bold;
  position: relative;
  transition: opacity $transition-speed-default;

  &:hover {
    opacity: $opacity-link-hover;
  }

  &::after {
    position: absolute;
    display: block;
    content: "";
    width: 8px;
    height: 8px;
    border-radius: $border-radius-content;
    background-color: #fff;
    top: 0;
    bottom: 0;
    left: 8px;
    margin: auto;
  }

  > .name {
    text-decoration: none;
  }
}
</style>
