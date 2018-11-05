<template lang="html">
  <section
    :class="pageLayoutClasses"
    class="container">
    <h1 class="f1">Current Inventory</h1>
  </section>
</template>

<script>
export default {
  computed: {
    pageLayoutClasses() {
      return 'mw7 ph3 pt4 center'
    }
  },
  head() {
    return {
      title: `Current Inventory`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Current Inventory at Steady State Cycles'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Bikes we have in stock at Steady State Cycles with size and pricing info'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://www.steadystatecycles.com${this.$route.path}`
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
