// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue", "@nuxtjs/supabase"],
  primevue: {
    components: {
      include: "*",
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || "http://localhost:3000",
    },
  },
  supabase: {
    redirectOptions: {
      login: "/",
      callback: "/confirm",
    },
  },
  css: [
    "primevue/resources/themes/aura-light-blue/theme.css",
    "primeicons/primeicons.css",
    "~/css/global.css",
  ],
});
