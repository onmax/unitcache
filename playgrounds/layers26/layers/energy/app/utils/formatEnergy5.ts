export interface EnergyFormatOptions5 { precision?: number, unit?: string, locale?: string }

export function formatEnergy5 (value: number | string | undefined, options: EnergyFormatOptions5 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupEnergy5<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const energyThresholds5 = Object.freeze({ low: 16, mid: 44, high: 83 })
