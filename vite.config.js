import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// base '/eigen-software-solutions/' is the GitHub Pages project path.
// vue-router history mode needs this absolute base (import.meta.env.BASE_URL);
// the previous './' base cannot serve as a router base. If a custom domain
// is ever added, switch base to '/' and the router base follows.
export default defineConfig({
  base: '/eigen-software-solutions/',
  plugins: [vue()],
})
