<template lang="html">
  <picture>
    <source
      media="(max-width: 59em)"
      srcset="~assets/wordmark-vert.svg">
    <source
      media="(min-width: 59em)"
      srcset="~assets/wordmark-horiz.svg">
    <img
      v-lazy="require('~/assets/wordmark-vert.svg')"
      alt="Steady State Cycles">
  </picture>
</template>

<style lang="css" scoped>
  >>> { margin-bottom: 3rem; }
  img {
    max-width: 16rem;
  }
  @media (min-width: 60em) {
    img { max-width: 100%; }
  }
</style>
