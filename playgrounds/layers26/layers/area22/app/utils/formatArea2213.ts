export interface Area22FormatOptions13 { precision?: number, unit?: string, locale?: string }

export function formatArea2213 (value: number | string | undefined, options: Area22FormatOptions13 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea2213<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area22Thresholds13 = Object.freeze({ low: 11, mid: 42, high: 99 })
