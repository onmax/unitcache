export function useEnergyState9 (initial = 0) {
  const count = useState<number>('energy-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-9', () => [])
  const grouped = computed(() => groupEnergy14(items.value))
  const label = computed(() => formatEnergy14(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
