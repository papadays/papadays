<template>
  <Home />
</template>

<script lang='ts'>
import { Component, State, Vue } from 'nuxt-property-decorator';
import axios from 'axios';
import Home from '~/components/templates/Home.vue';

@Component({
  head() {
    return {
      title: 'ホーム',
    };
  },
  components: {
    Home,
  },
  async created() {
    this.$store.dispatch('putArticleListRecent');
  },
})
export default class HomePage extends Vue {
}
</script>
