export interface DashboardFormatOptions14 { precision?: number, unit?: string, locale?: string }

export function formatDashboard14 (value: number | string | undefined, options: DashboardFormatOptions14 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupDashboard14<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const dashboardThresholds14 = Object.freeze({ low: 3, mid: 42, high: 81 })
