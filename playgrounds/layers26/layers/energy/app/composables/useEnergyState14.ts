export function useEnergyState14 (initial = 2) {
  const count = useState<number>('energy-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-14', () => [])
  const grouped = computed(() => groupEnergy14(items.value))
  const label = computed(() => formatEnergy14(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
