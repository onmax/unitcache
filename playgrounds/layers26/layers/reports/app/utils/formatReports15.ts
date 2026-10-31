export interface ReportsFormatOptions15 { precision?: number, unit?: string, locale?: string }

export function formatReports15 (value: number | string | undefined, options: ReportsFormatOptions15 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupReports15<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const reportsThresholds15 = Object.freeze({ low: 22, mid: 35, high: 77 })
