export interface PlanningFormatOptions6 { precision?: number, unit?: string, locale?: string }

export function formatPlanning6 (value: number | string | undefined, options: PlanningFormatOptions6 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupPlanning6<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const planningThresholds6 = Object.freeze({ low: 20, mid: 45, high: 71 })
