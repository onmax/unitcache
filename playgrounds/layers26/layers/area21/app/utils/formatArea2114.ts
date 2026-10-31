export interface Area21FormatOptions14 { precision?: number, unit?: string, locale?: string }

export function formatArea2114 (value: number | string | undefined, options: Area21FormatOptions14 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea2114<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area21Thresholds14 = Object.freeze({ low: 7, mid: 33, high: 67 })
