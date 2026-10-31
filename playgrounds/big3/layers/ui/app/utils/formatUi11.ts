export interface UiFormatOptions11 { precision?: number, unit?: string, locale?: string }

export function formatUi11 (value: number | string | undefined, options: UiFormatOptions11 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupUi11<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const uiThresholds11 = Object.freeze({ low: 28, mid: 41, high: 62 })
