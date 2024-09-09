import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue');
const AboutView = () => import('@/views/AboutView.vue');
const ProjectView = () => import('@/views/ProjectView.vue');
const ExperienceView = () => import('@/views/ExperienceView.vue');
const ContactView = () => import('@/views/ContactView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //CreateWebHistory: Enable HTML5 History Mode, for clean URL(without # symbol in the URl)
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
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
