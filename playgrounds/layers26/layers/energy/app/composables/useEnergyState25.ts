export function useEnergyState25 (initial = 1) {
  const count = useState<number>('energy-state-25', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-25', () => [])
  const grouped = computed(() => groupEnergy15(items.value))
  const label = computed(() => formatEnergy15(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
