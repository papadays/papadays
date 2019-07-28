
<template>
  <div :class="$options._componentTag">
    <TagIcon
      v-for="tag in tagList" v-bind:key="tag.id"
      :tag="tag"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Tag } from '~/types';

import TagIcon from '~/components/atoms/TagIcon.vue';

@Component({
  components: {
    TagIcon,
  },
})
export default class TagList extends Vue {
  @Prop({
    required: true,
  }) tagList!: Tag[];
}
</script>

<style lang="scss" scoped>
.TagList {
  display: flex;
  flex-wrap: wrap;
  padding: $padding-section-space;

  & ::v-deep .TagIcon {
    margin: 5px 3px;
  }
}
</style>