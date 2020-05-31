import colors from 'vuetify/es5/util/colors';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'uk'
    },
    titleTemplate: "Гніздичівська АЗПСМ",
    title: "Гніздичівська АЗПСМ",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Гніздичівська амблуаторія сімейної практики та загальної медицини, надає послуи з лікування, аналізу крові та медичних консультацій' },
      { name:'google-site-verification', content:'r2TTDJXhygfh5MZGBGLnF-B4cVFyYJpy_xNpYi005Gs' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
,
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    credentials: false,
  },

  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    },
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    },
  },

  /* Options to generate sitemap file */
  sitemap: {
    hostname: 'http://hnyzclinic.lviv.ua',
    gzip: true,
    routes: [
      {
        url: '/',
        priority: 1,
        lastmodISO: '2020-05-30T00:30:00.000Z'
      },
      {
        url: '/staff',
        priority: 1,
        lastmodISO: '2020-05-30T00:30:00.000Z'
      },
      {
        url: '/services',
        priority: 1,
        lastmodISO: '2020-05-30T00:30:00.000Z'
      },
      {
        url: '/news',
        priority: 1,
        lastmodISO: '2020-05-30T00:30:00.000Z'
      },
      {
        url: '/contacts',
        priority: 1,
        lastmodISO: '2020-05-30T00:30:00.000Z'
      },
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  }
}
