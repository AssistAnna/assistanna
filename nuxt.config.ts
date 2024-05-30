// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  pages: true,
  modules: ["@nuxt/image"],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})