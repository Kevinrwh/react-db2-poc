import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy API requests during development once backend is ready
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Your backend's local server
        changeOrigin: true,
        secure: false,
      },
    },
  },
})