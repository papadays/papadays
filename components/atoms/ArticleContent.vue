<template>
  <article v-html="content" :class="$options._componentTag"></article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class ArticleContent extends Vue {
  @Prop({
    required: true,
  }) content!: string;
}
</script>

<style lang="scss" scoped>
.ArticleContent {
  & ::v-deep p,
  & ::v-deep h2,
  & ::v-deep h3,
  & ::v-deep h4,
  & ::v-deep a {
    letter-spacing: 0.1em;
    color: $color-text-primary;
  }

  & ::v-deep h2,
  & ::v-deep h3,
  & ::v-deep h4 {
    font-size: $font-size-content-title;
    padding-left: 30px;
  }

  & ::v-deep p,
  & ::v-deep a {
    font-size: $font-size-content-default;
    font-weight: bold;
    word-break: break-all;
    line-height: 1.8;

    @include responsive() {
      padding: 0 $padding-sp-space;
    }
  }

  & ::v-deep p {
    margin: 0;
  }

  & ::v-deep h2 {
    border: solid 2px $color-content-primary;
    position: relative;
    padding: $padding-text-space;
    margin: 50px 0 20px;
    background-color: $color-background-secondary;
    padding-left: 30px;

    &::before {
      position: absolute;
      width: 20px;
      display: block;
      content: "";
      height: 100%;
      background-color: $color-content-primary;
      bottom: 0;
      left: 0;
    }
  }

  & ::v-deep h3 {
    position: relative;
    margin: 30px 0 20px;
    padding: 10px 0 5px 30px;

    &::before {
      position: absolute;
      content: '';
      bottom: -3px;
      left: 0;
      width: 0;
      height: 0;
      border: none;
      border-left: solid 20px transparent;
      border-bottom: solid 20px $color-content-primary;
    }

    &::after {
      position: absolute;
      content: '';
      bottom: -3px;
      left: 10px;
      width: calc(100% - 10px);
      border-bottom: solid 3px $color-content-primary;
    }
  }

  & ::v-deep h4 {
    margin: 30px 0 20px;
    padding: 10px 0 5px 30px;
    position: relative;

    &::before {
      display: block;
      content: "";
      position: absolute;
      top: 15px;
      left: 10px;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 10px solid $color-content-primary;;
    }
  }

  & ::v-deep a {
    text-decoration: none;
    color: $color-text-link;
    display: inline;
    transition: color $transition-speed-default;

    &:hover {
      color: $color-content-secondary;
    }

    &[target="_blank"] {
      &::after {
        display: inline-block;
        content: '\f35d';
        margin: 0 $margin-item-space-small;
        font-family: "Font Awesome 5 Free";
      }
    }
  }

  & ::v-deep code {
    background-color: $color-background-code;
    font-size: $font-size-content-code;
    padding: 2px 5px;
    border-radius: $border-radius-content;
    margin: 0 2px;
  }

  & ::v-deep pre {
    border-radius: $border-radius-content;

    @include responsive() {
      border-radius: 0;
    }

    & code {
      background-color: transparent;
      padding: 0;
      margin: 0;
      border-radius: 0;
      font-size: initial;
    }
  }

  & ::v-deep .has-large-font-size {
    font-size: $font-size-content-large;
    margin: 30px 0;
  }

  & ::v-deep .prism {
    & code {
      color: #cc99cd;
    }
  }

  & ::v-deep .wp-block-image {
    max-width: 100%;

    & > img {
      width: 100%;
    }
  }
}
</style>
