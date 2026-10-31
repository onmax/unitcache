export interface AuditFormatOptions5 { precision?: number, unit?: string, locale?: string }

export function formatAudit5 (value: number | string | undefined, options: AuditFormatOptions5 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupAudit5<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const auditThresholds5 = Object.freeze({ low: 26, mid: 54, high: 96 })
