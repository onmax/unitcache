import { createRouter, createWebHistory } from 'vue-router'
import { dashboardRoutes } from '@va/dashboard/dashboardRoutes.ts'
import { alarmsRoutes } from '@va/alarms/alarmsRoutes.ts'
import { kpisRoutes } from '@va/kpis/kpisRoutes.ts'
import { reportsRoutes } from '@va/reports/reportsRoutes.ts'
import { adminRoutes } from '@units/admin/adminRoutes.ts'
import { settingsRoutes } from '@units/settings/settingsRoutes.ts'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('./HomePage.vue') },
    ...dashboardRoutes,
    ...alarmsRoutes,
    ...kpisRoutes,
    ...reportsRoutes,
    ...adminRoutes,
    ...settingsRoutes,
  ],
})
