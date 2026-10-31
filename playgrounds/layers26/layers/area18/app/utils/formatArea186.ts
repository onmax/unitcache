export interface Area18FormatOptions6 { precision?: number, unit?: string, locale?: string }

export function formatArea186 (value: number | string | undefined, options: Area18FormatOptions6 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea186<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area18Thresholds6 = Object.freeze({ low: 21, mid: 57, high: 68 })
