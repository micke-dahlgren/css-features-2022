import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { hash } from './src/utils/hash.js'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // forces new cache on each build
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]` + hash + `.js`,
        chunkFileNames: `[name]` + hash + `.js`,
        assetFileNames: `[name]` + hash + `.[ext]`
      }
    }
  }
})
