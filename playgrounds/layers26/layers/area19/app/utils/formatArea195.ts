export interface Area19FormatOptions5 { precision?: number, unit?: string, locale?: string }

export function formatArea195 (value: number | string | undefined, options: Area19FormatOptions5 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea195<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area19Thresholds5 = Object.freeze({ low: 3, mid: 31, high: 75 })
