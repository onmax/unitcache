export function useEnergyState12 (initial = 2) {
  const count = useState<number>('energy-state-12', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-12', () => [])
  const grouped = computed(() => groupEnergy12(items.value))
  const label = computed(() => formatEnergy12(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
