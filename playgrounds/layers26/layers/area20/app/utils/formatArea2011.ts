export interface Area20FormatOptions11 { precision?: number, unit?: string, locale?: string }

export function formatArea2011 (value: number | string | undefined, options: Area20FormatOptions11 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea2011<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area20Thresholds11 = Object.freeze({ low: 2, mid: 49, high: 80 })
