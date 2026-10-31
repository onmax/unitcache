export interface Area20FormatOptions13 { precision?: number, unit?: string, locale?: string }

export function formatArea2013 (value: number | string | undefined, options: Area20FormatOptions13 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea2013<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area20Thresholds13 = Object.freeze({ low: 29, mid: 52, high: 62 })
