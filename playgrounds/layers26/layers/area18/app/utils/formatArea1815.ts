export interface Area18FormatOptions15 { precision?: number, unit?: string, locale?: string }

export function formatArea1815 (value: number | string | undefined, options: Area18FormatOptions15 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupArea1815<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const area18Thresholds15 = Object.freeze({ low: 20, mid: 39, high: 86 })
