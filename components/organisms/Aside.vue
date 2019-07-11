<template>
  <aside :class="$options._componentTag">
    <AsideSectionBox>
      <AsideSectionTitle
        label="カテゴリー"
        fasClass="fas fa-folder-open"
      />
      <AsideSectionContent>
        <CategoryList
          :categoryList="categoryList"
        />
      </AsideSectionContent>
    </AsideSectionBox>

    <AsideSectionBox>
      <AsideSectionTitle
        label="タグ"
        fasClass="fas fa-tag" />
      <AsideSectionContent>
        <TagList
          :tagList="tagList"
        />
      </AsideSectionContent>
    </AsideSectionBox>
  </aside>
</template>

<script lang="ts">
import { Component, State, Vue } from 'nuxt-property-decorator';
import { Category, Tag } from '~/types';

import AsideSectionBox from '~/components/molcules/AsideSectionBox.vue';
import AsideSectionTitle from '~/components/atoms/AsideSectionTitle.vue';
import AsideSectionContent from '~/components/molcules/AsideSectionContent.vue';
import CategoryList from '~/components/organisms/CategoryList.vue';
import TagList from '~/components/organisms/TagList.vue';

@Component({
  components: {
    AsideSectionBox,
    AsideSectionTitle,
    AsideSectionContent,
    CategoryList,
    TagList,
  },
  async created() {
    this.$store.dispatch('putCategoryList');
    this.$store.dispatch('putTagList');
  },
})
export default class Aside extends Vue {
  @State categoryList!: Category[];
  @State tagList!: Tag[];
}
</script>

<style lang="scss" scoped>
.Aside {
  grid-area: Aside;
  
  & /deep/ .AsideSectionBox {
    &:not(:first-child) {
      margin-top: $margin-aside-section-space;
    }
  }

  & /deep/ .TagList {
    padding-top: 0;
  }
}
</style>