<template>
  <Home />
</template>

<script lang="ts">
import { Component, State, Vue } from "nuxt-property-decorator";
import axios from "axios"

import Home from "~/components/templates/Home.vue";

@Component({
  head() {
    return {
      title: 'ホーム'
    }
  },
  layout: 'home',
  components: {
    Home
  },
  async created() {
    const res = await axios.get('http://papadays.xsrv.jp/wp-json/wp/v2/posts?orderby=date')
    this.$store.commit('setArticleListRecent', res.data)
  },
})
export default class PagesHome extends Vue {}
</script>
