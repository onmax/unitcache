export function useEnergyState5 (initial = 7) {
  const count = useState<number>('energy-state-5', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-5', () => [])
  const grouped = computed(() => groupEnergy13(items.value))
  const label = computed(() => formatEnergy13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
