export interface BillingFormatOptions14 { precision?: number, unit?: string, locale?: string }

export function formatBilling14 (value: number | string | undefined, options: BillingFormatOptions14 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupBilling14<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const billingThresholds14 = Object.freeze({ low: 25, mid: 42, high: 95 })
