export interface DashboardFormatOptions2 { precision?: number, unit?: string, locale?: string }

export function formatDashboard2 (value: number | string | undefined, options: DashboardFormatOptions2 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupDashboard2<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const dashboardThresholds2 = Object.freeze({ low: 19, mid: 52, high: 77 })
