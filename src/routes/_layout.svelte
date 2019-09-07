<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>

</style>

<svelt:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.11.1/tachyons.css" />

</svelt:head>
<Nav {segment} />

<main>
  <slot />
</main>
