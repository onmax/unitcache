export interface Area23FormatOptions10 { precision?: number, unit?: string, locale?: string }

export function formatArea2310 (value: number | string | undefined, options: Area23FormatOptions10 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea2310<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area23Thresholds10 = Object.freeze({ low: 28, mid: 48, high: 95 })
