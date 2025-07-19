import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap' // 1. Import the sitemap plugin

export default defineConfig({
  // 2. Add the sitemap plugin to the plugins array
  plugins: [
    react(),
    sitemap({ hostname: 'https://aethra.onrender.com' })
  ],

  server: {
    host: '127.0.0.1', // local
    port: 3000
  }
})