export interface Area24FormatOptions8 { precision?: number, unit?: string, locale?: string }

export function formatArea248 (value: number | string | undefined, options: Area24FormatOptions8 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea248<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area24Thresholds8 = Object.freeze({ low: 10, mid: 54, high: 78 })
