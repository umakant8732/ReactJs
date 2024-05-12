import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import REACT_APP_BASE_URL from './src/API/Api'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    proxy: {

      '/api': {
        target: REACT_APP_BASE_URL,
        changeOrigin: "true",
      },

    },
  },
})
