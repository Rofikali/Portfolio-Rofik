// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },

  srcDir: 'src/',

  ssr: true,

  css: [
    '~/assets/css/tailwind.css'
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],

  components: [
    {
      path: '~/presentation/components',
      pathPrefix: false
    }
  ],

  imports: {
    dirs: [
      'presentation/composables',
      'application/**/useCases'
    ]
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      titleTemplate: '%s',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#020617' },
        { name: 'author', content: 'Rofik' },
        { property: 'og:site_name', content: 'Rofik Portfolio' },
        { property: 'og:type', content: 'website' }
      ]
    }
  }
})
