export interface Area19FormatOptions12 { precision?: number, unit?: string, locale?: string }

export function formatArea1912 (value: number | string | undefined, options: Area19FormatOptions12 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea1912<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area19Thresholds12 = Object.freeze({ low: 25, mid: 36, high: 83 })
