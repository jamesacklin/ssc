<script>
  import Nav from "../components/Nav.svelte";
  import Logo from "../components/Logo.svelte";
  import MailSignup from "../components/MailSignup.svelte";

  import { Map } from "@beyonk/svelte-mapbox/src/components.js";
  import Marker from "../components/Marker.svelte";

  let mapComponent;

  let mapOptions = {
    interactive: false,
    center: [-79.8809158, 40.4878486],
    zoom: 13
  }

  export let segment;
</script>

<style>
  .map-wrap {
    width: 100%;
    height: 50vh;
  }
</style>

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

<div class="map-wrap">
  <Map
    bind:this={mapComponent}
    accessToken="pk.eyJ1IjoiamFtZXNhY2tsaW4yIiwiYSI6ImNqcXh3bDlwZzBhY3AzeHJwbm1sM2pjOTQifQ.BPOM2BoMCgpnASR6lAS_Rg"
    style="mapbox://styles/jamesacklin2/cjqxxobda0xdf2sqodb869kyq"
    options={mapOptions}
  >
    <Marker label="Steady State Cycles" lat="{mapOptions.center[1]}" lon="{mapOptions.center[0]}" />
  </Map>
</div>
