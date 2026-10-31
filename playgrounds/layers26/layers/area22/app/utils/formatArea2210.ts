export interface Area22FormatOptions10 { precision?: number, unit?: string, locale?: string }

export function formatArea2210 (value: number | string | undefined, options: Area22FormatOptions10 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea2210<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area22Thresholds10 = Object.freeze({ low: 12, mid: 45, high: 69 })
