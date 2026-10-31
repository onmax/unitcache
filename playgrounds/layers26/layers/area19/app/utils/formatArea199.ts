export interface Area19FormatOptions9 { precision?: number, unit?: string, locale?: string }

export function formatArea199 (value: number | string | undefined, options: Area19FormatOptions9 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea199<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area19Thresholds9 = Object.freeze({ low: 13, mid: 32, high: 95 })
