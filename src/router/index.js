import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WritingView from '../views/WritingView.vue'
import NoteView from '../views/NoteView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  // BASE_URL is '/eigen-software-solutions/' (vite.config.js) — the GitHub
  // Pages project path. History mode gives clean URLs (/writing, /about);
  // public/404.html + the restore script in index.html make direct loads
  // and refreshes of those URLs work on static GitHub Pages hosting.
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/writing', name: 'writing', component: WritingView },
    { path: '/writing/:slug', name: 'note', component: NoteView },
    { path: '/about', name: 'about', component: AboutView },
    // Unknown paths render a 404 page instead of silently landing on home.
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (to.hash) return { el: to.hash, behavior: reduceMotion ? 'auto' : 'smooth' }
    return { top: 0 }
  },
})

export default router
