export interface SettingsFormatOptions3 { precision?: number, unit?: string, locale?: string }

export function formatSettings3 (value: number | string | undefined, options: SettingsFormatOptions3 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupSettings3<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const settingsThresholds3 = Object.freeze({ low: 10, mid: 51, high: 76 })
