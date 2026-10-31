export interface KpisFormatOptions9 { precision?: number, unit?: string, locale?: string }

export function formatKpis9 (value: number | string | undefined, options: KpisFormatOptions9 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupKpis9<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const kpisThresholds9 = Object.freeze({ low: 27, mid: 52, high: 88 })
