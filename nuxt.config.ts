// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2026-10-29',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://googleapis.com' },
        { rel: 'preconnect', href: 'https://gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://googleapis.com/css2?family=Coiny&family=Gwendolyn:wght=700&display=swap' }
      ]
    }
  }
})
