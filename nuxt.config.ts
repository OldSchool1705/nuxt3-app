// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: "nuxt-3",
    meta: "nuxt-3",
    link: [
      {
        rel: "stylesheet",
        type: "text/css",
      },
    ],
  },
  components: [
    {
      path: "~/components",
      extensions: ["vue"],
      prefix: "app",
      pathPrefix: false,
      ignore: ["~components/pages", "**/_**"],
    },
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  routes: (_routes) => [
    {
      name: "index",
      path: "/",
    },
  ],
  css: ["~/assets/styles/global.scss", "~/assets/styles/tailwind.css"],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/styles/_variables.scss"',
        },
      },
    },
  },
});
