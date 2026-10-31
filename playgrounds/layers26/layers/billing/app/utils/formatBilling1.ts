export interface BillingFormatOptions1 { precision?: number, unit?: string, locale?: string }

export function formatBilling1 (value: number | string | undefined, options: BillingFormatOptions1 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupBilling1<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const billingThresholds1 = Object.freeze({ low: 4, mid: 48, high: 86 })
