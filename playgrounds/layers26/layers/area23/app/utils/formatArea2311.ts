export interface Area23FormatOptions11 { precision?: number, unit?: string, locale?: string }

export function formatArea2311 (value: number | string | undefined, options: Area23FormatOptions11 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea2311<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area23Thresholds11 = Object.freeze({ low: 22, mid: 50, high: 89 })
