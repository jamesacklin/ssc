<template lang="html">
  <section
    :class="pageLayoutClasses"
    class="container">
    <h1 class="f1">Brands We Carry</h1>
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
      title: `Brands We Carry`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Brands We Carry at Steady State Cycles'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Bikes, accessories, and clothing in stock at Steady State Cycles'
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
