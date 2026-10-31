import catalog from '../data/admin-catalog.json'
import { coreRows } from '@va/core/utils/coreRows.ts'

export const adminCatalog = catalog.filter(entry => entry.weight > 15)
export const adminSeed = coreRows(3)
