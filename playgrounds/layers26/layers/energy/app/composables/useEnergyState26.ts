export function useEnergyState26 (initial = 1) {
  const count = useState<number>('energy-state-26', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-26', () => [])
  const grouped = computed(() => groupEnergy1(items.value))
  const label = computed(() => formatEnergy1(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
