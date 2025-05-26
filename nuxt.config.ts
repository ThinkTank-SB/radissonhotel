// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  
  app: {
    head: {
      title: 'Radisson Hotels: Luxury & Upscale Hotels Worldwide',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Discover luxury hotel experiences with Radisson Hotels worldwide. Book your perfect stay with our best price guarantee.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap'
        }
      ]
    }
  },
  
  css: [
    '~/assets/css/main.css'
  ],
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],
  
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English (US)',
        file: 'en-US.json'
      },
      {
        code: 'es',
        name: 'Español',
        file: 'es-ES.json'
      }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default'
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})