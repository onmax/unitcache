export interface CoreFormatOptions6 { precision?: number, unit?: string, locale?: string }

export function formatCore6 (value: number | string | undefined, options: CoreFormatOptions6 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupCore6<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const coreThresholds6 = Object.freeze({ low: 18, mid: 56, high: 94 })
