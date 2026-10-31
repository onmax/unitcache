export function useEnergyState8 (initial = 4) {
  const count = useState<number>('energy-state-8', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-8', () => [])
  const grouped = computed(() => groupEnergy1(items.value))
  const label = computed(() => formatEnergy1(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
