export function useEnergyState4 (initial = 4) {
  const count = useState<number>('energy-state-4', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-4', () => [])
  const grouped = computed(() => groupEnergy3(items.value))
  const label = computed(() => formatEnergy3(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
