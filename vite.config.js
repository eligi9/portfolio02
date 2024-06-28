import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: fileURLToPath(new URL('./', import.meta.url)),
  resolve:
  { alias:
    { 
      'config': fileURLToPath(new URL('./src/css/_config.scss', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '/css':   fileURLToPath(new URL('./src/css', import.meta.url)),
      '/assets':   fileURLToPath(new URL('./src/assets', import.meta.url)),
      '/state':   fileURLToPath(new URL('./src/state', import.meta.url)),
      '/components':   fileURLToPath(new URL('./src/components', import.meta.url)),
      '/grid':   fileURLToPath(new URL('./src/components/grid', import.meta.url)),
      '/projectItems':   fileURLToPath(new URL('./src/components/project/projectItems', import.meta.url)),
      '/fonts':   fileURLToPath(new URL('./src/assets/fonts', import.meta.url)),
      '/service':   fileURLToPath(new URL('./src/service', import.meta.url)),
      '/json':   fileURLToPath(new URL('./public/json', import.meta.url)),
      '/images':   fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      '/about':   fileURLToPath(new URL('./src/components/about', import.meta.url)),
      '/icons':   fileURLToPath(new URL('./src/assets/icons', import.meta.url))
    }
  },
  build: 
  { outDir:  './web',
    minify:  true,
  },
  base: './',
})
