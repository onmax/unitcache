export function useEnergyState15 (initial = 4) {
  const count = useState<number>('energy-state-15', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-15', () => [])
  const grouped = computed(() => groupEnergy10(items.value))
  const label = computed(() => formatEnergy10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
