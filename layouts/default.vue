<template>
  <div>
    <Logo/>
    <Navigation />
    <nuxt/>
    <div class="tc pv5">
      <img
        src="~assets/white-diamond.svg"
        alt="Steady State Cycles"
        class="mw4">
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Logo,
    Navigation
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: black;
  color: white;
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-weight: 800;
  text-rendering: optimizeLegibility;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
