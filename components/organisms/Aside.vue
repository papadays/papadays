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

    <AsideSectionBox class="-subcontent">
      <AsideSectionTitle
        label="このブログを作った人"
        :icon="logoPointMono" />
      <AsideSectionContent>
        <About />
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
import About from '~/components/organisms/About.vue';

@Component({
  components: {
    AsideSectionBox,
    AsideSectionTitle,
    AsideSectionContent,
    CategoryList,
    TagList,
    About,
  },
  async created() {
    this.$store.dispatch('putCategoryList');
    this.$store.dispatch('putTagList');
  },
})
export default class Aside extends Vue {
  @State categoryList!: Category[];
  @State tagList!: Tag[];

  logoPointMono = require('~/assets/img/logo-point-mono.svg');
}
</script>

<style lang="scss" scoped>
.Aside {
  grid-area: Aside;

  @include responsive() {
    padding: 0 $padding-sp-space;
  }

  & ::v-deep .AsideSectionBox {
    &:not(:first-child) {
      margin-top: $margin-aside-section-space;
    }
    &.-subcontent {
      margin-top: 30px;
    }
  }
}
</style>
