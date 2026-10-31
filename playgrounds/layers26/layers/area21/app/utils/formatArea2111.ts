export interface Area21FormatOptions11 { precision?: number, unit?: string, locale?: string }

export function formatArea2111 (value: number | string | undefined, options: Area21FormatOptions11 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea2111<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area21Thresholds11 = Object.freeze({ low: 6, mid: 47, high: 97 })
