export interface PlanningFormatOptions15 { precision?: number, unit?: string, locale?: string }

export function formatPlanning15 (value: number | string | undefined, options: PlanningFormatOptions15 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupPlanning15<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const planningThresholds15 = Object.freeze({ low: 25, mid: 32, high: 75 })
