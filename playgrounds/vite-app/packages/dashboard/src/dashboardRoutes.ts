import type { RouteRecordRaw } from 'vue-router'

function dashboardGuard (to: { query: Record<string, unknown> }) {
  if (to.query.denied === 'dashboard') return '/'
}

export const dashboardRoutes: RouteRecordRaw[] = [
  { path: '/dashboard', name: 'dashboard-home', component: () => import('./pages/DashboardHome.vue'), beforeEnter: dashboardGuard },
  { path: '/dashboard/item/:dashboardId', name: 'dashboard-detail', component: () => import('./pages/DashboardDetail.vue'), beforeEnter: dashboardGuard },
  { path: '/dashboard/p2', name: 'dashboard-p2', component: () => import('./pages/DashboardPage2.vue'), beforeEnter: dashboardGuard },
  { path: '/dashboard/p3', name: 'dashboard-p3', component: () => import('./pages/DashboardPage3.vue'), beforeEnter: dashboardGuard },
  { path: '/dashboard/p4', name: 'dashboard-p4', component: () => import('./pages/DashboardPage4.vue'), beforeEnter: dashboardGuard },
  { path: '/dashboard/p5', name: 'dashboard-p5', component: () => import('./pages/DashboardPage5.vue'), beforeEnter: dashboardGuard },
  { path: '/dashboard/p6', name: 'dashboard-p6', component: () => import('./pages/DashboardPage6.vue'), beforeEnter: dashboardGuard },
  { path: '/dashboard/p7', name: 'dashboard-p7', component: () => import('./pages/DashboardPage7.vue'), beforeEnter: dashboardGuard },
  { path: '/dashboard/p8', name: 'dashboard-p8', component: () => import('./pages/DashboardPage8.vue'), beforeEnter: dashboardGuard },
  { path: '/dashboard/p9', name: 'dashboard-p9', component: () => import('./pages/DashboardPage9.vue'), beforeEnter: dashboardGuard },
  { path: '/dashboard/p10', name: 'dashboard-p10', component: () => import('./pages/DashboardPage10.vue'), beforeEnter: dashboardGuard },
  { path: '/dashboard/p11', name: 'dashboard-p11', component: () => import('./pages/DashboardPage11.vue'), beforeEnter: dashboardGuard },
]
