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
    <no-ssr>
      <mapbox-map />
    </no-ssr>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Navigation from '@/components/Navigation.vue'
import MapboxMap from '@/components/Map.vue'

export default {
  components: {
    Logo,
    Navigation,
    MapboxMap
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
