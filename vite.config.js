import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Resume/',
  plugins: [react()],
  server: {
    allowedHosts: [
      '.ngrok-free.dev'
    ]
  }
})