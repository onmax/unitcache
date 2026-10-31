export interface CoreFormatOptions1 { precision?: number, unit?: string, locale?: string }

export function formatCore1 (value: number | string | undefined, options: CoreFormatOptions1 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupCore1<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const coreThresholds1 = Object.freeze({ low: 17, mid: 31, high: 73 })
