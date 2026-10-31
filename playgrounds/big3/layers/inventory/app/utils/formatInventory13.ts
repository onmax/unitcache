export interface InventoryFormatOptions13 { precision?: number, unit?: string, locale?: string }

export function formatInventory13 (value: number | string | undefined, options: InventoryFormatOptions13 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupInventory13<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const inventoryThresholds13 = Object.freeze({ low: 28, mid: 36, high: 71 })
