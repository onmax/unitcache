export interface SettingsFormatOptions2 { precision?: number, unit?: string, locale?: string }

export function formatSettings2 (value: number | string | undefined, options: SettingsFormatOptions2 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupSettings2<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const settingsThresholds2 = Object.freeze({ low: 3, mid: 36, high: 70 })
