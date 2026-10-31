export interface UiFormatOptions12 { precision?: number, unit?: string, locale?: string }

export function formatUi12 (value: number | string | undefined, options: UiFormatOptions12 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupUi12<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const uiThresholds12 = Object.freeze({ low: 8, mid: 45, high: 71 })
