<template lang="html">
  <nav class="cf">
    <ul class="list f3 fr pr3 pr4-m pr5-l pt0 pt4-l">
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
    transition: all 0.2s ease;
  }
  .link:before {
    transition: all 0.2s ease;
    content: "";
    position: absolute;
    top: -0.5em;
    width: 0.888em;
    border-top: 0.2em solid white;
    opacity: 0;
  }
  .link:hover {
    opacity: 0.8;
  }
  .link:focus {
    outline: none;
  }
  .link.nuxt-link-exact-active:before,
  .link:hover:before {
    opacity: 1;
  }
</style>
