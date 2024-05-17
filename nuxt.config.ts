// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import io from 'socket.io-client'

export default ({
  devtools: { enabled: true },
  css: [
    "~/assets/styles/scss/main.scss",
    "~/assets/styles/css/main.css",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  plugins: [{ src: "~/plugins/vuetify.js" }, "@/plugins/nuxt-socket-io"],
  routeRules: {
    "/faq": { ssr: true },
    // Generated at build time for SEO purpose
    // Cached for 1 hour
    "/api/*": { cache: { maxAge: 60 * 60 }, cors: false },
  },
  build: {
    transpile: ["vuetify"],
  },
  runtimeConfig: {
    public: {
      API_URL: "https://azapi.ok-ex.io",
      LOCAL_URL: "http://localhost:3000",
    },
  },
  modules: [
    // (_options, nuxt) => {
    //   nuxt.hooks.hook("vite:extendConfig", (config) => {
    //     // @ts-expect-error
    //     config.plugins.push(vuetify({ autoImport: true }));
    //   });
    // },
    "nuxt-socket-io",
    
  ],

  // io: {
  //   sockets: [
  //     // Required
  //     {
  //       // At least one entry is required
  //       name: "main",
  //       url: "wss://wsg.ok-ex.io/ws",
  //       default: true,
  //     },
  //   ],
  // },
  
  socketio: {
    server: {
      path: '/io'
    },
    client: {
      namespace: 'wss://wsg.ok-ex.io/ws',
      autoConnect: true
    }
  },
  
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
