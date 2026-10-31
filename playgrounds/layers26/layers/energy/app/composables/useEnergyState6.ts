export function useEnergyState6 (initial = 2) {
  const count = useState<number>('energy-state-6', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-6', () => [])
  const grouped = computed(() => groupEnergy9(items.value))
  const label = computed(() => formatEnergy9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
