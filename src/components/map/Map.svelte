<script>
  import { Map } from "@beyonk/svelte-mapbox/src/components.js";
  import Marker from "./Marker.svelte";

  let mapComponent;

  let mapOptions = {
    interactive: false,
    center: [-79.8809158, 40.4878486],
    zoom: 13
  };
</script>

<style>
  .map-wrap {
    width: 100%;
    height: 50vh;
  }
</style>

<div class="map-wrap">
  <Map
    bind:this={mapComponent}
    accessToken="pk.eyJ1IjoiamFtZXNhY2tsaW4yIiwiYSI6ImNqcXh3bDlwZzBhY3AzeHJwbm1sM2pjOTQifQ.BPOM2BoMCgpnASR6lAS_Rg"
    style="mapbox://styles/jamesacklin2/cjqxxobda0xdf2sqodb869kyq"
    options={mapOptions}>
    <Marker
      label="Steady State Cycles"
      lat={mapOptions.center[1]}
      lon={mapOptions.center[0]} />
  </Map>
</div>
