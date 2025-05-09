// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare_module",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        name: 'nuxt-plugin-visit-counter-issue'
      }
    }
  },

  modules: ["nitro-cloudflare-dev"],
  ssr: false
})
