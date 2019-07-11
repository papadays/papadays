import NuxtConfiguration from '@nuxt/config'

const nuxtConfig: NuxtConfiguration = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | PAPADAYS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'sample text of description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
  ],
  styleResources: {
    sass: [
      '@/assets/css/style.scss',
    ]
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/my-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/style-resources',
    ['@nuxtjs/moment', ['ja']],
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
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        if (!config.module) return
        config.module.rules.push({
          test: /\.ts$/,
          enforce: 'pre',
          loader: './plugins/my-tslint-loader.js',
          options: {
            configFile: 'tslint.json',
            tsConfigFile: 'tsconfig.json',
          },
        })
      }
    }
  }
}

export default nuxtConfig
