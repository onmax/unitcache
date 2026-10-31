import type { RouteRecordRaw } from 'vue-router'

function kpisGuard (to: { query: Record<string, unknown> }) {
  if (to.query.denied === 'kpis') return '/'
}

export const kpisRoutes: RouteRecordRaw[] = [
  { path: '/kpis', name: 'kpis-home', component: () => import('./pages/KpisHome.vue'), beforeEnter: kpisGuard },
  { path: '/kpis/item/:kpisId', name: 'kpis-detail', component: () => import('./pages/KpisDetail.vue'), beforeEnter: kpisGuard },
  { path: '/kpis/p2', name: 'kpis-p2', component: () => import('./pages/KpisPage2.vue'), beforeEnter: kpisGuard },
  { path: '/kpis/p3', name: 'kpis-p3', component: () => import('./pages/KpisPage3.vue'), beforeEnter: kpisGuard },
  { path: '/kpis/p4', name: 'kpis-p4', component: () => import('./pages/KpisPage4.vue'), beforeEnter: kpisGuard },
  { path: '/kpis/p5', name: 'kpis-p5', component: () => import('./pages/KpisPage5.vue'), beforeEnter: kpisGuard },
  { path: '/kpis/p6', name: 'kpis-p6', component: () => import('./pages/KpisPage6.vue'), beforeEnter: kpisGuard },
  { path: '/kpis/p7', name: 'kpis-p7', component: () => import('./pages/KpisPage7.vue'), beforeEnter: kpisGuard },
  { path: '/kpis/p8', name: 'kpis-p8', component: () => import('./pages/KpisPage8.vue'), beforeEnter: kpisGuard },
  { path: '/kpis/p9', name: 'kpis-p9', component: () => import('./pages/KpisPage9.vue'), beforeEnter: kpisGuard },
  { path: '/kpis/p10', name: 'kpis-p10', component: () => import('./pages/KpisPage10.vue'), beforeEnter: kpisGuard },
  { path: '/kpis/p11', name: 'kpis-p11', component: () => import('./pages/KpisPage11.vue'), beforeEnter: kpisGuard },
]
