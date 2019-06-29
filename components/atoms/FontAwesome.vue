<template>
  <i :class="icon"></i>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class FontAwesome extends Vue {
  @Prop({
    required: true
  }) icon!: string
}
</script>
