export interface DashboardFormatOptions4 { precision?: number, unit?: string, locale?: string }

export function formatDashboard4 (value: number | string | undefined, options: DashboardFormatOptions4 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupDashboard4<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const dashboardThresholds4 = Object.freeze({ low: 22, mid: 45, high: 91 })
