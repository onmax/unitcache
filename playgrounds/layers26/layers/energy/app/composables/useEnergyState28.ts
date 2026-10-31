export function useEnergyState28 (initial = 2) {
  const count = useState<number>('energy-state-28', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-28', () => [])
  const grouped = computed(() => groupEnergy4(items.value))
  const label = computed(() => formatEnergy4(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
