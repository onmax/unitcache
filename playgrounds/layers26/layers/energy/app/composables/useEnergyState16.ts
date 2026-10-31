export function useEnergyState16 (initial = 2) {
  const count = useState<number>('energy-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-16', () => [])
  const grouped = computed(() => groupEnergy2(items.value))
  const label = computed(() => formatEnergy2(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
