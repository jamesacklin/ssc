<template lang="html">
  <div class="mapbox-wrapper">
    <mapbox-gl-vue
      :access-token="config.mapbox.accessToken"
      :map-options="config.mapbox.mapOptions"
      :nav-control="{ show: false }"
      @map-load="mapLoaded"
    />
  </div>
</template>

 <script>
import MapboxGlVue from 'mapbox-gl-vue'
export default {
  name: 'MapboxMap',
  components: {
    MapboxGlVue
  },
  data() {
    return {
      config: {
        mapbox: {
          accessToken:
            'pk.eyJ1IjoiamFtZXNhY2tsaW4yIiwiYSI6ImNqcXh3bDlwZzBhY3AzeHJwbm1sM2pjOTQifQ.BPOM2BoMCgpnASR6lAS_Rg',
          mapOptions: {
            style: 'mapbox://styles/jamesacklin2/cjqxxobda0xdf2sqodb869kyq',
            center: [-79.9284984, 40.3713688],
            zoom: 12,
            interactive: false
          }
        }
      }
    }
  },
  methods: {
    mapLoaded(map) {
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-79.9284984, 40.3713688]
                },
                properties: {
                  title: 'Steady State Cycles',
                  address: '347 Lebanon Road',
                  icon: 'marker'
                }
              }
            ]
          }
        },
        layout: {
          'icon-image': '{icon}-15',
          'text-field': '{title} {address}',
          'text-font': ['Neue Haas Grotesk Text Pro 75 Bold'],
          'text-size': 24,
          'text-offset': [0, 0.6],
          'text-anchor': 'top'
        },
        paint: {
          'text-color': '#FFFFFF'
        }
      })
    }
  }
}
</script>

 <style lang="css">
  #map {
    height: 500px;
  }
</style>
