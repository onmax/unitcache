export interface InventoryFormatOptions14 { precision?: number, unit?: string, locale?: string }

export function formatInventory14 (value: number | string | undefined, options: InventoryFormatOptions14 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupInventory14<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const inventoryThresholds14 = Object.freeze({ low: 14, mid: 55, high: 76 })
