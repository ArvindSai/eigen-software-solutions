import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base './' keeps asset paths working on GitHub Pages project sites
// regardless of the repo name, which is still to be confirmed.
// Switch to '/<repo>/' if a root-absolute base is preferred later.
export default defineConfig({
  base: './',
  plugins: [vue()],
})
