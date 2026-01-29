import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages serves this app from:
  // https://unicef.github.io/unicef-material-ui/example/
  // so asset paths must be prefixed with `/unicef-material-ui/example/`.
  base: '/unicef-material-ui/example/',
  plugins: [react()],
  server: {
    port: 3000,
  },
})
