export default defineNuxtConfig({
  ssr: false,
  modules: ["@pinia/nuxt", "@nuxt/image"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/assets/styles/main.scss";`,
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      apiKey: process.env.API_KEY,
    },
  },
})
