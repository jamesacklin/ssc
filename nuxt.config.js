const pkg = require('./package')
const webpack = require('webpack')

module.exports = {
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'en-us'
    },
    titleTemplate: `%s • ${pkg.title}`,
    meta: [
      {
        charset: 'utf-8'
      },
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
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        href: '//api.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.css',
        rel: 'stylesheet'
      }
    ]
  },
  loading: {
    color: 'rgb(116, 188, 30)'
  },
  css: [
    'tachyons/css/tachyons.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~assets/main.css'
  ],
  plugins: [
    {
      src: '~/plugins/fontawesome.js'
    },
    {
      src: '~/plugins/vue-lazyload.js',
      ssr: false
    }
  ],
  router: {
    routes: [
      {
        path: '/',
        name: 'index'
      },
      {
        path: '/brands',
        name: 'brands'
      }
    ]
  },
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  axios: {},
  generate: {
    cache: true,
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    }
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    plugins: [
      new webpack.ProvidePlugin({
        mapboxgl: 'mapbox-gl'
      })
    ],
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
