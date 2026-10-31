export interface BillingFormatOptions12 { precision?: number, unit?: string, locale?: string }

export function formatBilling12 (value: number | string | undefined, options: BillingFormatOptions12 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 0)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupBilling12<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const billingThresholds12 = Object.freeze({ low: 17, mid: 46, high: 92 })
