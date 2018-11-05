<template>
  <section
    :class="pageLayoutClasses"
    class="container">
    <TextLogo />
    <div class="measure lh-copy">
      <p class="f3 mb5">A Pittsburgh cycling shop for top-tier road and mountain products and service.</p>
      <ul class="list relative pl0 ml4">
        <li class="mb3"><span class="fa-li"><font-awesome-icon icon="phone" /></span>(412) 462-4193</li>
        <li class="mb3"><span class="fa-li"><font-awesome-icon icon="envelope-open" /></span>steadystatecyclespgh@gmail.com</li>
        <li class="mb3"><span class="fa-li"><font-awesome-icon icon="compass" /></span>347 Lebanon Rd. West Mifflin, PA 15122</li>
        <li class="mb3"><span class="fa-li"><font-awesome-icon icon="clock" /></span>Open Weekdays 10AM - 7PM<br>Saturday by Appointment<br>Closed Sunday</li>
      </ul>
    </div>
  </section>
</template>

<script>
import TextLogo from '~/components/TextLogo.vue'
export default {
  components: {
    TextLogo
  },
  computed: {
    pageLayoutClasses() {
      return 'mw7 ph3 pt4 center'
    }
  },
  head() {
    return {
      title: 'Shop Info',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Steady State Cycles'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Pittsburgh's premier high-end road and mountain bike shop with sales, accessories, clothing, and service. Now open weekdays at 347 Lebanon Rd.`
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
