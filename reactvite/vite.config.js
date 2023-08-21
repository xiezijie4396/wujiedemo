import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/child/reactvite/',
  plugins: [react()],
  server: {
    port: 8005,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
    }
  },
  build: {
    outDir: path.join(__dirname, '../server/child/reactvite')
  }
})
