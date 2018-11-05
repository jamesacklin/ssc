const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: `%s • ${pkg.title}`,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        property: 'og:image',
        content: 'https://www.steadystatecycles.com/assets/og-preview.png'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        hid: 'og:url',
        content: 'https://www.steadystatecycles.com/'
      },
      {
        property: 'og:title',
        hid: 'og:title',
        content: pkg.title
      },
      {
        property: 'og:description',
        hid: 'og:description',
        content: pkg.description
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'tachyons/css/tachyons.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fontawesome.js',
    { src: '~/plugins/vue-lazyload.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
