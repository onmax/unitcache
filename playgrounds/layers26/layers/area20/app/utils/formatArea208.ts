export interface Area20FormatOptions8 { precision?: number, unit?: string, locale?: string }

export function formatArea208 (value: number | string | undefined, options: Area20FormatOptions8 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea208<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area20Thresholds8 = Object.freeze({ low: 22, mid: 34, high: 72 })
