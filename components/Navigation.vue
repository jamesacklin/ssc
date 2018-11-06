<template lang="html">
  <nav class="cf">
    <ul class="list f3 fr pl0 pr3 pr4-m pr5-l pt4-l relative">
      <li>
        <span
          :style="{top: `${overlineTop}px`}"
          class="overline" />
        <nuxt-link
          class="link"
          to="/"
          @click.native="handleNav($event)">Info</nuxt-link>
      </li>
      <li>
        <nuxt-link
          class="link"
          to="/inventory"
          @click.native="handleNav($event)">Inventory</nuxt-link>
      </li>
      <li>
        <nuxt-link
          class="link"
          to="/brands"
          @click.native="handleNav($event)">Brands</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data: function() {
    return {
      overlineTop: '-28'
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      window.addEventListener('load', this.setCurrentRouteOverline)
      window.addEventListener('resize', this.setCurrentRouteOverline)
    })
  },
  methods: {
    handleNav: function(event) {
      this.overlineTop = this.calcOffset(event.target)
    },
    calcOffset(elem) {
      var parentRect = elem.parentElement.getBoundingClientRect(),
        elemRect = elem.getBoundingClientRect(),
        offset = elemRect.top - parentRect.top,
        overlinePos = elemRect.top - 28
      return overlinePos
    },
    setCurrentRouteOverline() {
      var currentRouteElem = this.$el.querySelector('.nuxt-link-exact-active')
      this.overlineTop = this.calcOffset(currentRouteElem)
    }
  }
}
</script>

<style lang="css" scoped>
  .list {
    line-height: 2.25em;
  }
  .link {
    color: white;
    position: relative;
    transition: all 0.2s ease;
  }
  .overline {
    transition: all 0.2s ease;
    content: "";
    position: absolute;
    left: 0;
    /* top: -333px; */
    width: 0.888em;
    border-top: 0.2em solid white;
    transition: all 0.2s ease;
  }
  .link:focus {
    outline: none;
  }
</style>
