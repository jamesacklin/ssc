<template>
  <div>
  <section :class="pageLayoutClasses" class="container">
    <TextLogo/>
    <div class="measure lh-copy">
      <p
        class="f3 mb5"
      >A Pittsburgh cycling shop for top-tier road and mountain products and service.</p>
      <ul class="list relative pl0 ml4">
        <li class="mb3 relative">
          <span class="fa-li">
            <font-awesome-icon icon="phone"/>
          </span>(412) 462-4193
        </li>
        <li class="mb3 relative">
          <span class="fa-li">
            <font-awesome-icon icon="envelope-open"/>
          </span>steadystatecyclespgh@gmail.com
        </li>
        <li class="mb3 relative">
          <span class="fa-li">
            <font-awesome-icon icon="compass"/>
          </span>1153 Old Freeport Road Pittsburgh, PA 15238
        </li>
        <li class="mb3 relative">
          <span class="fa-li">
            <font-awesome-icon icon="clock"/>
          </span>Open Weekdays 10AM - 7PM
          <br>Saturday 12PM - 5PM
          <br>Closed Sunday
        </li>
      </ul>
    </div>
  </section>
  <section class="promo-banner mt4">
    <div class="flex-l items-center justify-center">
      <img
        class="pv3 w-50-l"
        v-lazy="require('~/assets/logos/cervelo.svg')"
        :alt="`Cervélo`"
      >
      <div class="lh-copy ph3 pb3 pv5-l">
        <h2 class="mb3 overline">New for 2020!</h2>
        <p class="">Steady State Cycles is now a Cervélo dealer!<br>Stop in today and demo your new bike.</p>
      </div>
    </div>
  </section>
  </div>
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
          content: `Pittsburgh's premier high-end road and mountain bike shop with sales, accessories, clothing, and service. Now open at 1153 Old Freeport Road.`
        },
        {
          hid: 'description',
          name: 'description',
          content: `Pittsburgh's premier high-end road and mountain bike shop with sales, accessories, clothing, and service. Now open at 1153 Old Freeport Road.`
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
.promo-banner {
  background: rgb(218, 32, 28);
}

.overline {
  position: relative;
}

.overline::before {
  content: "";
  background: white;
  width: 1.25ch;
  height: 3px;
  position: absolute;
  top: -0.13em;
}
</style>
