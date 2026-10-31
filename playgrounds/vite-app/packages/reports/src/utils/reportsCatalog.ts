import catalog from '../data/reports-catalog.json'
import { coreRows } from '@va/core/utils/coreRows.ts'

export const reportsCatalog = catalog.filter(entry => entry.weight > 26)
export const reportsSeed = coreRows(4)
