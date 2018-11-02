<template>
  <section class="container">
    <logo/>
    <div class="mw7 ph3 pt4 pt6-m pt7-l center">
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
      <div class="tc pv5">
        <img
          src="~assets/white-diamond.svg"
          alt="Steady State Cycles"
          class="mw4">
      </div>
    </div>
  </section>
</template>

  <script>
import Logo from '~/components/Logo.vue'
import TextLogo from '~/components/TextLogo.vue'

export default {
  components: {
    Logo,
    TextLogo
  }
}
</script>
