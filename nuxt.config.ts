import { defineNuxtConfig } from 'nuxt'
import { InlineConfig } from 'vite'

const vite: InlineConfig = {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/_imports.scss";',
      },
    },
  },
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  app: {
    head: {
      title: `L'atelier de Warren`,
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/atelier-de-warren.ico' },
      ],
    },
  },

  css: ['@/assets/style/main.scss'],

  vite,

  typescript: {
    strict: true,
    shim: false,
  },

  experimental: {
    reactivityTransform: true,
  },
})
