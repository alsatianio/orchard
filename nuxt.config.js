export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'Orchard UI',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],

  googleFonts: {
    families: {
      'Open Sans': [100, 200, 300, 400, 500, 600]
    }
  },

  modules: [
    '@nuxt/content',
  ],

  content: {},

  colorMode: {
    classSuffix: "",
    preferred: 'dark'
  }
}
