import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(() => {

  return {
    base: '/', // ICI
    server: {
      hmr: {
        overlay: false // désactive l'overlay Vite
      }
    },
    plugins: [
      vue(),
      // active vite-plugin-vue-devtools uniquement en dev
      // isDev ? vueDevTools() : null,
      null
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
  }
})