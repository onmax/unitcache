export interface AlarmsFormatOptions9 { precision?: number, unit?: string, locale?: string }

export function formatAlarms9 (value: number | string | undefined, options: AlarmsFormatOptions9 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupAlarms9<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const alarmsThresholds9 = Object.freeze({ low: 10, mid: 47, high: 93 })
