import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // BASE_URL is '/eigen-software-solutions/' (vite.config.js) — the GitHub
  // Pages project path. History mode gives clean URLs (/writing, /about);
  // public/404.html + the restore script in index.html make direct loads
  // and refreshes of those URLs work on static GitHub Pages hosting.
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    // /writing lands in its own task; /about in the task after that.
    // Unknown paths go home rather than rendering a blank page.
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
