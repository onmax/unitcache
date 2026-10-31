export function useEnergyState29 (initial = 7) {
  const count = useState<number>('energy-state-29', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-29', () => [])
  const grouped = computed(() => groupEnergy9(items.value))
  const label = computed(() => formatEnergy9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
