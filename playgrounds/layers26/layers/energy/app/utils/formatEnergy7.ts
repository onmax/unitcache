export interface EnergyFormatOptions7 { precision?: number, unit?: string, locale?: string }

export function formatEnergy7 (value: number | string | undefined, options: EnergyFormatOptions7 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 1)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupEnergy7<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const energyThresholds7 = Object.freeze({ low: 14, mid: 47, high: 81 })
