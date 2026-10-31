export interface ReportsFormatOptions8 { precision?: number, unit?: string, locale?: string }

export function formatReports8 (value: number | string | undefined, options: ReportsFormatOptions8 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupReports8<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const reportsThresholds8 = Object.freeze({ low: 14, mid: 36, high: 65 })
