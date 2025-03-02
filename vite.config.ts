import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public/assets',
    emptyOutDir: true,
    manifest: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/js')
    }
  }
})
