<script>
  export let segment;
</script>

<style>
  @media (min-width: 1200px) {
    nav {
      min-height: 10em;
    }
  }
  .list {
    line-height: 2.25em;
  }
  .link {
    color: white;
    position: relative;
    transition: all 0.2s ease;
  }
  /* .overline {
    transition: all 0.2s ease;
    content: "";
    position: absolute;
    left: 0;
    width: 0.888em;
    border-top: 0.2em solid white;
    transition: all 0.2s ease;
  } */
  .link:focus {
    outline: none;
  }
</style>

<nav class="cf">
  <ul class="list f3 fr pl0 pr3 pr4-m pr5-l pt4-l relative">
    <li>
      <a class={segment === undefined ? 'link overline' : 'link'} href=".">
        Info
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        class={segment === 'about' ? 'link overline' : 'link'}
        href="about">
        Brands
      </a>
    </li>
  </ul>
</nav>
