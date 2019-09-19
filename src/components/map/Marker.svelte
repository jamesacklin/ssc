<script>
  import { getContext } from "svelte";
  import { contextKey } from "@beyonk/svelte-mapbox/src/mapbox.js";

  const { getMap, getMapbox } = getContext(contextKey);
  const map = getMap();
  const mapbox = getMapbox();

  map.addLayer({
    id: "points",
    type: "symbol",
    source: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-79.8809158, 40.4878486]
            },
            properties: {
              title: "Steady State Cycles",
              address: "1153 Old Freeport Road",
              icon: "marker"
            }
          }
        ]
      }
    },
    layout: {
      "icon-image": "{icon}-15",
      "text-field": "{address}",
      "text-font": ["Neue Haas Grotesk Text Pro 75 Bold"],
      "text-size": 24,
      "text-offset": [0, 0.6],
      "text-anchor": "top"
    },
    paint: {
      "text-color": "#FFFFFF"
    }
  });
</script>
