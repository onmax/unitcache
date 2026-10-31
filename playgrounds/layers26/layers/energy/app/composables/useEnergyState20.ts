export function useEnergyState20 (initial = 7) {
  const count = useState<number>('energy-state-20', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-20', () => [])
  const grouped = computed(() => groupEnergy8(items.value))
  const label = computed(() => formatEnergy8(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
