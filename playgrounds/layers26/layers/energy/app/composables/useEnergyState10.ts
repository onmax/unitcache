export function useEnergyState10 (initial = 6) {
  const count = useState<number>('energy-state-10', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-10', () => [])
  const grouped = computed(() => groupEnergy1(items.value))
  const label = computed(() => formatEnergy1(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
