export interface Area15FormatOptions15 { precision?: number, unit?: string, locale?: string }

export function formatArea1515 (value: number | string | undefined, options: Area15FormatOptions15 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea1515<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area15Thresholds15 = Object.freeze({ low: 13, mid: 54, high: 74 })
