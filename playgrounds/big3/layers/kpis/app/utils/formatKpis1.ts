export interface KpisFormatOptions1 { precision?: number, unit?: string, locale?: string }

export function formatKpis1 (value: number | string | undefined, options: KpisFormatOptions1 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupKpis1<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const kpisThresholds1 = Object.freeze({ low: 28, mid: 56, high: 71 })
