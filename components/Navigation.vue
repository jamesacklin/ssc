<template lang="html">
  <nav>
    <ul class="list f3 fr pr3">
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
    line-height: 2.25em;
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
    width: 0.888em;
    border-top: 0.2em solid white;
  }
</style>
