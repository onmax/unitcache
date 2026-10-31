import catalog from '../data/dashboard-catalog.json'
import { coreRows } from '@va/core/utils/coreRows.ts'

export const dashboardCatalog = catalog.filter(entry => entry.weight > 29)
export const dashboardSeed = coreRows(2)
