import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true, // or use host: '0.0.0.0'
    port: 4173, // specify the port you want to use
  },
  preview: {
    allowedHosts: ['unique-portfolio-tc5p.onrender.com'],
  },
})
