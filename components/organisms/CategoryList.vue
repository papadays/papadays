
<template>
  <ul :class="$options._componentTag">
    <li class="item" v-for="category in categoryList" v-bind:key="category.id">
      <CategoryCard
        :category="category"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Category } from '~/types';

import CategoryCard from '~/components/molcules/CategoryCard.vue';

@Component({
  components: {
    CategoryCard,
  },
})
export default class CategoryList extends Vue {
  @Prop({
    required: true,
  }) categoryList!: Category[];
}
</script>
