// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  pages: true,
  modules: ["@nuxt/image"],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      title: 'AssistAnna',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Création de site web et refonte graphique' },
        { name: 'image', content: 'https://assistanna.com/img-seo.png'}
      ],
    }
  }
})