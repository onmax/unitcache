import type { RouteRecordRaw } from 'vue-router'

function adminGuard (to: { query: Record<string, unknown> }) {
  if (to.query.denied === 'admin') return '/'
}

export const adminRoutes: RouteRecordRaw[] = [
  { path: '/admin', name: 'admin-home', component: () => import('./pages/AdminHome.vue'), beforeEnter: adminGuard },
  { path: '/admin/item/:adminId', name: 'admin-detail', component: () => import('./pages/AdminDetail.vue'), beforeEnter: adminGuard },
  { path: '/admin/p2', name: 'admin-p2', component: () => import('./pages/AdminPage2.vue'), beforeEnter: adminGuard },
  { path: '/admin/p3', name: 'admin-p3', component: () => import('./pages/AdminPage3.vue'), beforeEnter: adminGuard },
  { path: '/admin/p4', name: 'admin-p4', component: () => import('./pages/AdminPage4.vue'), beforeEnter: adminGuard },
  { path: '/admin/p5', name: 'admin-p5', component: () => import('./pages/AdminPage5.vue'), beforeEnter: adminGuard },
  { path: '/admin/p6', name: 'admin-p6', component: () => import('./pages/AdminPage6.vue'), beforeEnter: adminGuard },
  { path: '/admin/p7', name: 'admin-p7', component: () => import('./pages/AdminPage7.vue'), beforeEnter: adminGuard },
  { path: '/admin/p8', name: 'admin-p8', component: () => import('./pages/AdminPage8.vue'), beforeEnter: adminGuard },
  { path: '/admin/p9', name: 'admin-p9', component: () => import('./pages/AdminPage9.vue'), beforeEnter: adminGuard },
  { path: '/admin/p10', name: 'admin-p10', component: () => import('./pages/AdminPage10.vue'), beforeEnter: adminGuard },
  { path: '/admin/p11', name: 'admin-p11', component: () => import('./pages/AdminPage11.vue'), beforeEnter: adminGuard },
]
