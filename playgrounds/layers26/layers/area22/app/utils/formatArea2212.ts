export interface Area22FormatOptions12 { precision?: number, unit?: string, locale?: string }

export function formatArea2212 (value: number | string | undefined, options: Area22FormatOptions12 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea2212<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area22Thresholds12 = Object.freeze({ low: 9, mid: 58, high: 77 })
