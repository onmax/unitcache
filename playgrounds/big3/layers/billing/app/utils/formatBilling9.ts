export interface BillingFormatOptions9 { precision?: number, unit?: string, locale?: string }

export function formatBilling9 (value: number | string | undefined, options: BillingFormatOptions9 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupBilling9<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const billingThresholds9 = Object.freeze({ low: 2, mid: 32, high: 64 })
