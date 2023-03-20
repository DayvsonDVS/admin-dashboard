// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/breakpoints.scss";`
        }
      }
    }
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['ion-icon'].includes(tag)
    }
  },
  app: {
    head: {
      script: [
        {
          type: 'module',
          src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
          body: true
        },
        {
          src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
          body: true
        }
      ]
    }
  },
  components: [{ path: '@/components', pathPrefix: false }],
  dir: {
    pages: 'components/pages'
  }
})
