export interface EnergyFormatOptions2 { precision?: number, unit?: string, locale?: string }

export function formatEnergy2 (value: number | string | undefined, options: EnergyFormatOptions2 = {}): string {
  if (value === undefined || value === '') return '-'
  const n = typeof value === 'string' ? Number.parseFloat(value) : value
  if (Number.isNaN(n)) return String(value)
  const fixed = n.toFixed(options.precision ?? 2)
  return options.unit ? `${fixed} ${options.unit}` : fixed
}

export function groupEnergy2<T extends { status: string }> (items: T[]): Record<string, T[]> {
  const out: Record<string, T[]> = {}
  for (const item of items) (out[item.status] ??= []).push(item)
  return out
}

export const energyThresholds2 = Object.freeze({ low: 7, mid: 36, high: 95 })
