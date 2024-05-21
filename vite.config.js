import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:
  { alias:
    { 
      'config': fileURLToPath(new URL('./src/css/_config.scss', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '/css':   fileURLToPath(new URL('./src/css', import.meta.url)),
      '/assets':   fileURLToPath(new URL('./src/assets', import.meta.url)),
      '/components':   fileURLToPath(new URL('./src/components', import.meta.url)),
      '/grid':   fileURLToPath(new URL('./src/components/grid', import.meta.url))
    }
  },
  build: 
  { outDir:  '../web',
    minify:  true,
  }  
})
