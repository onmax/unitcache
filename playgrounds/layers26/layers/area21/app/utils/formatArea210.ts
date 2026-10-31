export interface Area21FormatOptions0 { precision?: number, unit?: string, locale?: string }

export function formatArea210 (value: number | string | undefined, options: Area21FormatOptions0 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea210<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area21Thresholds0 = Object.freeze({ low: 8, mid: 55, high: 65 })
