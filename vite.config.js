import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from "path"

// Criamos uma referência manual para a pasta src
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Agora o '@' aponta corretamente para a pasta src
      '@': path.resolve(__dirname, './src'),
    },
  },
})