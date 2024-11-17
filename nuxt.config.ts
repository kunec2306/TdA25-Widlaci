// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    experimental: {
      database: true
    },
    database: {
      database: {
        connector: 'sqlite',
        options: { name: 'games'}
      }
    }
  },
  pages : true,
  css: [
    "@/assets/css/main.css",
    '@/assets/css/font.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
