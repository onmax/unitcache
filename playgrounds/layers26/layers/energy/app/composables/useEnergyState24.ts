export function useEnergyState24 (initial = 5) {
  const count = useState<number>('energy-state-24', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-24', () => [])
  const grouped = computed(() => groupEnergy11(items.value))
  const label = computed(() => formatEnergy11(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
