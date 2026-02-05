import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    target: 'es2020',
    assetsDir: 'js',
    rollupOptions: {
      input: './index.html'
    }
  }
})