// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr :true,
  routeRules: {
    '/**': { appMiddleware: ['auth-middle'] }  
  }
})