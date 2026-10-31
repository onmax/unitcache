export interface SettingsFormatOptions7 { precision?: number, unit?: string, locale?: string }

export function formatSettings7 (value: number | string | undefined, options: SettingsFormatOptions7 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupSettings7<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const settingsThresholds7 = Object.freeze({ low: 29, mid: 53, high: 83 })
