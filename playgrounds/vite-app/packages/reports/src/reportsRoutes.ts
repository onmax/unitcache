import type { RouteRecordRaw } from 'vue-router'

function reportsGuard (to: { query: Record<string, unknown> }) {
  if (to.query.denied === 'reports') return '/'
}

export const reportsRoutes: RouteRecordRaw[] = [
  { path: '/reports', name: 'reports-home', component: () => import('./pages/ReportsHome.vue'), beforeEnter: reportsGuard },
  { path: '/reports/item/:reportsId', name: 'reports-detail', component: () => import('./pages/ReportsDetail.vue'), beforeEnter: reportsGuard },
  { path: '/reports/p2', name: 'reports-p2', component: () => import('./pages/ReportsPage2.vue'), beforeEnter: reportsGuard },
  { path: '/reports/p3', name: 'reports-p3', component: () => import('./pages/ReportsPage3.vue'), beforeEnter: reportsGuard },
  { path: '/reports/p4', name: 'reports-p4', component: () => import('./pages/ReportsPage4.vue'), beforeEnter: reportsGuard },
  { path: '/reports/p5', name: 'reports-p5', component: () => import('./pages/ReportsPage5.vue'), beforeEnter: reportsGuard },
  { path: '/reports/p6', name: 'reports-p6', component: () => import('./pages/ReportsPage6.vue'), beforeEnter: reportsGuard },
  { path: '/reports/p7', name: 'reports-p7', component: () => import('./pages/ReportsPage7.vue'), beforeEnter: reportsGuard },
  { path: '/reports/p8', name: 'reports-p8', component: () => import('./pages/ReportsPage8.vue'), beforeEnter: reportsGuard },
  { path: '/reports/p9', name: 'reports-p9', component: () => import('./pages/ReportsPage9.vue'), beforeEnter: reportsGuard },
  { path: '/reports/p10', name: 'reports-p10', component: () => import('./pages/ReportsPage10.vue'), beforeEnter: reportsGuard },
  { path: '/reports/p11', name: 'reports-p11', component: () => import('./pages/ReportsPage11.vue'), beforeEnter: reportsGuard },
]
