export interface Area24FormatOptions4 { precision?: number, unit?: string, locale?: string }

export function formatArea244 (value: number | string | undefined, options: Area24FormatOptions4 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea244<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area24Thresholds4 = Object.freeze({ low: 25, mid: 34, high: 78 })
