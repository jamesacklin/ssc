<template lang="html">
  <section
    :class="pageLayoutClasses"
    class="container">
    <h1>Brands We Carry</h1>
  </section>
</template>

<script>
export default {
  computed: {
    pageLayoutClasses() {
      return 'mw7 ph3 pt4 pt5-m pt5-l center'
    }
  }
}
</script>

<style lang="css">
</style>
