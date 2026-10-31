import catalog from '../data/kpis-catalog.json'
import { coreRows } from '@va/core/utils/coreRows.ts'

export const kpisCatalog = catalog.filter(entry => entry.weight > 29)
export const kpisSeed = coreRows(2)
