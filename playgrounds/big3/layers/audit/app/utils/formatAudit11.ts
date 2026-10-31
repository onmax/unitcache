export interface AuditFormatOptions11 { precision?: number, unit?: string, locale?: string }

export function formatAudit11 (value: number | string | undefined, options: AuditFormatOptions11 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupAudit11<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const auditThresholds11 = Object.freeze({ low: 12, mid: 34, high: 91 })
