export interface QualityFormatOptions7 { precision?: number, unit?: string, locale?: string }

export function formatQuality7 (value: number | string | undefined, options: QualityFormatOptions7 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupQuality7<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const qualityThresholds7 = Object.freeze({ low: 13, mid: 38, high: 74 })
