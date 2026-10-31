import catalog from '../data/settings-catalog.json'
import { coreRows } from '@va/core/utils/coreRows.ts'

export const settingsCatalog = catalog.filter(entry => entry.weight > 27)
export const settingsSeed = coreRows(4)
