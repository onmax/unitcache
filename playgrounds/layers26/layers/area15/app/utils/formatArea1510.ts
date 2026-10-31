export interface Area15FormatOptions10 { precision?: number, unit?: string, locale?: string }

export function formatArea1510 (value: number | string | undefined, options: Area15FormatOptions10 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea1510<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area15Thresholds10 = Object.freeze({ low: 2, mid: 48, high: 92 })
