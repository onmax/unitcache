import catalog from '../data/alarms-catalog.json'
import { coreRows } from '@va/core/utils/coreRows.ts'

export const alarmsCatalog = catalog.filter(entry => entry.weight > 30)
export const alarmsSeed = coreRows(2)
