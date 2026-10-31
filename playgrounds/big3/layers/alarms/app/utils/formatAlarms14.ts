export interface AlarmsFormatOptions14 { precision?: number, unit?: string, locale?: string }

export function formatAlarms14 (value: number | string | undefined, options: AlarmsFormatOptions14 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupAlarms14<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const alarmsThresholds14 = Object.freeze({ low: 12, mid: 33, high: 88 })
