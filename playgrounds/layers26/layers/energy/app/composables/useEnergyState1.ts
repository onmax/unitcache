export function useEnergyState1 (initial = 1) {
  const count = useState<number>('energy-state-1', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-1', () => [])
  const grouped = computed(() => groupEnergy12(items.value))
  const label = computed(() => formatEnergy12(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
