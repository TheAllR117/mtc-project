import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FaqView from '../views/faq/FaqView.vue'
import LoginView from '../views/auth/LoginView.vue'
import PrivacyCookiesView from '../views/privacy/PrivacyCookiesView.vue'
import PrivacyPolicyView from '../views/privacy/PrivacyPolicyView.vue'
import RegisterView from '../views/auth/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: false,
        layout: 'DashboardLayout'
      }
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView,
      meta: {
        requiresAuth: false,
        layout: 'DashboardLayout'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        requiresAuth: false,
        layout: 'AppLayout'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        requiresAuth: false,
        layout: 'AppLayout'
      }
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyView ,
      meta: {
        requiresAuth: false,
        layout: 'DashboardLayout'
      }
    },
    {
      path: '/privacy-cookies',
      name: 'privacy-cookies',
      component: PrivacyCookiesView,
      meta: {
        requiresAuth: false,
        layout: 'DashboardLayout'
      }
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

export default router
