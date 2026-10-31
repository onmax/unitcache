export interface BillingFormatOptions15 { precision?: number, unit?: string, locale?: string }

export function formatBilling15 (value: number | string | undefined, options: BillingFormatOptions15 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupBilling15<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const billingThresholds15 = Object.freeze({ low: 21, mid: 53, high: 87 })
