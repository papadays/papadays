<template>
  <main :class="$options._componentTag">
    <SectionBox>
      <SectionTitle label="最近の投稿" />
      <SectionContent>
        <ArticleList :articleList="articleListRecent" />
      </SectionContent>
    </SectionBox>
  </main>
</template>

<script lang="ts">
import { Component, State, Vue } from 'nuxt-property-decorator';
import { Article } from '~/types';

import ArticleList from '~/components/organisms/ArticleList.vue';
import SectionBox from '~/components/molcules/SectionBox.vue';
import SectionTitle from '~/components/atoms/SectionTitle.vue';
import SectionContent from '~/components/molcules/SectionContent.vue';

@Component({
  components: {
    ArticleList,
    SectionBox,
    SectionTitle,
    SectionContent,
  },
})
export default class HomeTemp extends Vue {
  @State articleListRecent!: Article[];
}
</script>

<style lang="scss" scoped>
.Home {
  grid-area: Main;
}
</style>
