export interface UiFormatOptions0 { precision?: number, unit?: string, locale?: string }

export function formatUi0 (value: number | string | undefined, options: UiFormatOptions0 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupUi0<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const uiThresholds0 = Object.freeze({ low: 29, mid: 34, high: 95 })
