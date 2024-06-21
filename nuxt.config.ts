// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      gtagId: process.env.GTAG_ID,
    }
  },
  pages: true,
  modules: ["@nuxt/image", "@dargmuesli/nuxt-cookie-control"],
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
  },
  cookieControl: {
    colors: {
      checkboxActiveBackground: '#00A34A', // text-green-600
      controlButtonBackground: '#FEB858',
      controlButtonIconColor: '#fff',
      modalButtonBackground: '#567BDA',
      barBackground: '#1F2346',
      modalOverlayOpacity: 0.5,
    },
    closeModalOnClickOutside: true,
    cookies: {
      necessary: [
        {
          id: 'n',
          name: {
            fr: 'Cookies nécessaires'
          },
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_ID}`,
        },
      ],
      optional: [
        {
          id: 'o',
          name: 'Cookies optionnels',
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_ID}`,
        },
      ],
    },
    isCookieIdVisible: true,
    isIframeBlocked: true,
    locales: ['fr'],
  },
})