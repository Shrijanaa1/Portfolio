import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import ProjectView from "@/views/ProjectView.vue";
import ExperienceView from "@/views/ExperienceView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/projects',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView
    }
  ]
})

export default router
