import type { RouteRecordRaw } from 'vue-router'

function settingsGuard (to: { query: Record<string, unknown> }) {
  if (to.query.denied === 'settings') return '/'
}

export const settingsRoutes: RouteRecordRaw[] = [
  { path: '/settings', name: 'settings-home', component: () => import('./pages/SettingsHome.vue'), beforeEnter: settingsGuard },
  { path: '/settings/item/:settingsId', name: 'settings-detail', component: () => import('./pages/SettingsDetail.vue'), beforeEnter: settingsGuard },
  { path: '/settings/p2', name: 'settings-p2', component: () => import('./pages/SettingsPage2.vue'), beforeEnter: settingsGuard },
  { path: '/settings/p3', name: 'settings-p3', component: () => import('./pages/SettingsPage3.vue'), beforeEnter: settingsGuard },
  { path: '/settings/p4', name: 'settings-p4', component: () => import('./pages/SettingsPage4.vue'), beforeEnter: settingsGuard },
  { path: '/settings/p5', name: 'settings-p5', component: () => import('./pages/SettingsPage5.vue'), beforeEnter: settingsGuard },
  { path: '/settings/p6', name: 'settings-p6', component: () => import('./pages/SettingsPage6.vue'), beforeEnter: settingsGuard },
  { path: '/settings/p7', name: 'settings-p7', component: () => import('./pages/SettingsPage7.vue'), beforeEnter: settingsGuard },
  { path: '/settings/p8', name: 'settings-p8', component: () => import('./pages/SettingsPage8.vue'), beforeEnter: settingsGuard },
  { path: '/settings/p9', name: 'settings-p9', component: () => import('./pages/SettingsPage9.vue'), beforeEnter: settingsGuard },
  { path: '/settings/p10', name: 'settings-p10', component: () => import('./pages/SettingsPage10.vue'), beforeEnter: settingsGuard },
  { path: '/settings/p11', name: 'settings-p11', component: () => import('./pages/SettingsPage11.vue'), beforeEnter: settingsGuard },
]
