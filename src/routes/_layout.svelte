<script>
  import Nav from "../components/Nav.svelte";
  import Logo from "../components/Logo.svelte";
  import MailSignup from "../components/MailSignup.svelte";

  export let segment;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.11.1/tachyons.css" />
</svelte:head>

<Logo />

<Nav {segment} />

<main>
  <slot />
</main>

<MailSignup />

<div class="tc pv5">
  <img src="/logos/ssc-diamond.svg" alt="Steady State Cycles" class="mw4" />
</div>
