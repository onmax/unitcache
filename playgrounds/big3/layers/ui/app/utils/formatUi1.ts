export interface UiFormatOptions1 { precision?: number, unit?: string, locale?: string }

export function formatUi1 (value: number | string | undefined, options: UiFormatOptions1 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupUi1<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const uiThresholds1 = Object.freeze({ low: 6, mid: 34, high: 74 })
