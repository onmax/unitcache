export interface Area19FormatOptions13 { precision?: number, unit?: string, locale?: string }

export function formatArea1913 (value: number | string | undefined, options: Area19FormatOptions13 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea1913<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area19Thresholds13 = Object.freeze({ low: 22, mid: 59, high: 89 })
