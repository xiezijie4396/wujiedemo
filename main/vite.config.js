import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/main/',
  plugins: [vue()],
  server: {
    port: 8000
  },
  build: {
    outDir: path.join(__dirname, '../server/main')
  }
})
