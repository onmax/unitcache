export interface Area18FormatOptions4 { precision?: number, unit?: string, locale?: string }

export function formatArea184 (value: number | string | undefined, options: Area18FormatOptions4 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea184<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area18Thresholds4 = Object.freeze({ low: 26, mid: 40, high: 86 })
