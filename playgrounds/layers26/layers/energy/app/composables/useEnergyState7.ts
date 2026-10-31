export function useEnergyState7 (initial = 1) {
  const count = useState<number>('energy-state-7', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-7', () => [])
  const grouped = computed(() => groupEnergy6(items.value))
  const label = computed(() => formatEnergy6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
