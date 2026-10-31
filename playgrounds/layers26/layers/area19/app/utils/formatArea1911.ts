export interface Area19FormatOptions11 { precision?: number, unit?: string, locale?: string }

export function formatArea1911 (value: number | string | undefined, options: Area19FormatOptions11 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea1911<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area19Thresholds11 = Object.freeze({ low: 28, mid: 55, high: 87 })
