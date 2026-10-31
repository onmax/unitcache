export interface EnergyFormatOptions10 { precision?: number, unit?: string, locale?: string }

export function formatEnergy10 (value: number | string | undefined, options: EnergyFormatOptions10 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupEnergy10<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const energyThresholds10 = Object.freeze({ low: 26, mid: 44, high: 68 })
