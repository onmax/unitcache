export interface Area17FormatOptions3 { precision?: number, unit?: string, locale?: string }

export function formatArea173 (value: number | string | undefined, options: Area17FormatOptions3 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea173<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area17Thresholds3 = Object.freeze({ low: 6, mid: 43, high: 80 })
