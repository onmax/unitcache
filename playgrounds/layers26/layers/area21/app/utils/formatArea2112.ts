export interface Area21FormatOptions12 { precision?: number, unit?: string, locale?: string }

export function formatArea2112 (value: number | string | undefined, options: Area21FormatOptions12 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea2112<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area21Thresholds12 = Object.freeze({ low: 28, mid: 52, high: 88 })
