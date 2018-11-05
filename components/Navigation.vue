<template lang="html">
  <nav>
    <ul class="list f4 pl3">
      <li>
        <nuxt-link
          class="link"
          to="/">Info</nuxt-link>
      </li>
      <li>
        <nuxt-link
          class="link"
          to="/inventory">Inventory</nuxt-link>
      </li>
      <li>
        <nuxt-link
          class="link"
          to="/brands">Brands</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="css" scoped>
  .list {
    line-height: 2.5em;
  }
  .link {
    color: white;
    position: relative;
  }
  .link:focus {
    outline: none;
  }
  .link.nuxt-link-exact-active:before,
  .link:hover:before {
    content: "";
    position: absolute;
    top: -0.5em;
    width: 1em;
    border-top: 5px solid white;
  }
</style>
