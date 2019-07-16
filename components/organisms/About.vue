<template>
  <section :class="$options._componentTag">
    <table>
      <tr>
        <td>年月</td>
        <td>自分</td>
        <td>家族</td>
      </tr>
      <tr>
        <td>1986/09</td>
        <td colspan="2">誕生</td>
      </tr>
      <tr>
        <td>1989</td>
        <td colspan="2">渡米</td>
      </tr>
    </table>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class About extends Vue {
}
</script>

<style lang="scss" scoped>
.About {
  grid-area: About;
  background-color: $color-background-secondary;
  padding: $padding-section-space;
}
</style>
