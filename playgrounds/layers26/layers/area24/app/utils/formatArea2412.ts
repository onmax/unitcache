export interface Area24FormatOptions12 { precision?: number, unit?: string, locale?: string }

export function formatArea2412 (value: number | string | undefined, options: Area24FormatOptions12 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea2412<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area24Thresholds12 = Object.freeze({ low: 9, mid: 34, high: 77 })
