export interface Area20FormatOptions10 { precision?: number, unit?: string, locale?: string }

export function formatArea2010 (value: number | string | undefined, options: Area20FormatOptions10 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea2010<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area20Thresholds10 = Object.freeze({ low: 1, mid: 43, high: 75 })
