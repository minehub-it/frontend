import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'
import {createResolver} from '@nuxt/kit'

const {resolve} = createResolver(import.meta.url)

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  srcDir: './src',

  css: [
    '@/assets/styles/index.scss',
    'swiper/css',
    'swiper/css/pagination',
  ],

  alias: {
    '~': resolve(__dirname, '.'),
    '@': resolve(__dirname, './src'),
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({
          autoImport: true,
        }))
      })
    },
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    'pinia-plugin-persistedstate/nuxt',
  ],

  routeRules: {
    '/': { prerender: true },
    '/preferiti': { ssr: true },
    '/featured': { prerender: true },
    '/lista-server-java-edition': { swr: 3600 },
    '/lista-server-bedrock-edition': { swr: 3600 },
    '/api/**': { cors: true, ssr: false },
    '/patreon': { redirect: 'https://patreon.com/minecraftit' },
    '/discord': { redirect: 'https://discord.com/invite/minecraft-italia-522487914303586315' }
  },

  extends: [
    'github:minehub-it/frontend-layer-server',
  ],

  build: {
    transpile: ['vuetify'],
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
    },
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    },
  },

  imports: {
    dirs: ['api', 'const', 'stores','utils']
  },
})
