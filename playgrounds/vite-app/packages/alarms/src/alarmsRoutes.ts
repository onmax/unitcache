import type { RouteRecordRaw } from 'vue-router'

function alarmsGuard (to: { query: Record<string, unknown> }) {
  if (to.query.denied === 'alarms') return '/'
}

export const alarmsRoutes: RouteRecordRaw[] = [
  { path: '/alarms', name: 'alarms-home', component: () => import('./pages/AlarmsHome.vue'), beforeEnter: alarmsGuard },
  { path: '/alarms/item/:alarmsId', name: 'alarms-detail', component: () => import('./pages/AlarmsDetail.vue'), beforeEnter: alarmsGuard },
  { path: '/alarms/p2', name: 'alarms-p2', component: () => import('./pages/AlarmsPage2.vue'), beforeEnter: alarmsGuard },
  { path: '/alarms/p3', name: 'alarms-p3', component: () => import('./pages/AlarmsPage3.vue'), beforeEnter: alarmsGuard },
  { path: '/alarms/p4', name: 'alarms-p4', component: () => import('./pages/AlarmsPage4.vue'), beforeEnter: alarmsGuard },
  { path: '/alarms/p5', name: 'alarms-p5', component: () => import('./pages/AlarmsPage5.vue'), beforeEnter: alarmsGuard },
  { path: '/alarms/p6', name: 'alarms-p6', component: () => import('./pages/AlarmsPage6.vue'), beforeEnter: alarmsGuard },
  { path: '/alarms/p7', name: 'alarms-p7', component: () => import('./pages/AlarmsPage7.vue'), beforeEnter: alarmsGuard },
  { path: '/alarms/p8', name: 'alarms-p8', component: () => import('./pages/AlarmsPage8.vue'), beforeEnter: alarmsGuard },
  { path: '/alarms/p9', name: 'alarms-p9', component: () => import('./pages/AlarmsPage9.vue'), beforeEnter: alarmsGuard },
  { path: '/alarms/p10', name: 'alarms-p10', component: () => import('./pages/AlarmsPage10.vue'), beforeEnter: alarmsGuard },
  { path: '/alarms/p11', name: 'alarms-p11', component: () => import('./pages/AlarmsPage11.vue'), beforeEnter: alarmsGuard },
]
