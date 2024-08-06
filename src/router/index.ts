import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      path: '/download',
      name: 'download',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/download/DownloadView.vue'),
      meta: {
        requiresAuth: false,
        layout: 'DashboardLayout'
      }
    },
    {
      path: '/sale',
      name: 'sale',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/sale/SaleView.vue'),
      meta: {
        requiresAuth: false,
        layout: 'DashboardLayout'
      }
    },
    {
      path: '/more-solutions',
      name: 'more-solutions',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/more_solutions/MoreSolutionsView.vue'),
      meta: {
        requiresAuth: false,
        layout: 'DashboardLayout'
      }
    },
    {
      path: '/earn-more',
      name: 'earn-more',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/earn_more/EarnMoreView.vue'),
      meta: {
        requiresAuth: false,
        layout: 'DashboardLayout'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/blog/BlogView.vue'),
      meta: {
        requiresAuth: false,
        layout: 'DashboardLayout'
      }
    },
    {
      path: '/portals',
      name: 'portals',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/portals/PortalsView.vue'),
      meta: {
        requiresAuth: false,
        layout: 'DashboardLayout'
      }
    },
    {
      path: '/family-mtc',
      name: 'family-mtc',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/mtc_family/MtcFamilyView.vue'),
      meta: {
        requiresAuth: false,
        layout: 'DashboardLayout'
      }
    },
    {
      path: '/doubts',
      name: 'doubts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/doubts/DoubtsView.vue'),
      meta: {
        requiresAuth: false,
        layout: 'DashboardLayout'
      }
    }
  ]
})

export default router
