<template lang="html">
  <section
    :class="pageLayoutClasses"
    class="container">
    <h1 class="f1">Brands We Carry</h1>
    <ul class="list pa0">
      <li
        v-for="brand in brands"
        :key="brand.index"
        class="pa0 mt6 mb6"
      >
        <img
          v-lazy="require('~/assets/logos/' + brand.logo)"
          :alt="brand.name"
        >
        <span class="clip">
          {{ brand.description }}
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      brands: [
        {
          name: 'Scott',
          description: 'Scott bicycles and Syncros accessories',
          logo: 'scott.svg'
        },
        {
          name: 'Colnago',
          description: 'Colnago bicycles',
          logo: 'colnago.svg'
        },
        {
          name: 'Assos',
          description: 'Assos of Switzerland clothing',
          logo: 'assos.png'
        },
        {
          name: 'Zipp',
          description: 'Zipp wheels, equipment, and service',
          logo: 'zipp.svg'
        },
        {
          name: 'Campagnolo',
          description: 'Campagnolo drivetrains and certified service',
          logo: 'campagnolo.svg'
        },
        {
          name: 'Shimano',
          description:
            'Shimano drivetrains, accessories, clothing, and service',
          logo: 'shimano.svg'
        },
        {
          name: 'SRAM',
          description: 'SRAM drivetrains and service',
          logo: 'sram.svg'
        },
        {
          name: 'Quarq',
          description: 'Quarq power meters, accessories, and service',
          logo: 'quarq.png'
        },
        {
          name: 'Wahoo',
          description: 'Wahoo smart trainers and cycling computers',
          logo: 'wahoo.png'
        },
        {
          name: 'Tacx',
          description: 'Tacx smart trainers',
          logo: 'tacx.svg'
        },
        {
          name: 'Skratch Labs',
          description: 'Skratch Labs nutrition and hydration products',
          logo: 'skratch.svg'
        }
      ]
    }
  },
  computed: {
    pageLayoutClasses() {
      return 'mw7 ph3 pt4 center'
    }
  },
  head() {
    return {
      title: `Brands We Carry`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Brands We Carry at Steady State Cycles'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Bikes, accessories, and clothing in stock at Steady State Cycles'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Bikes, accessories, and clothing in stock at Steady State Cycles'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://www.steadystatecycles.com${this.$route.path}`
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
