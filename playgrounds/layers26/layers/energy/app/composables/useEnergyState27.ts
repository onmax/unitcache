export function useEnergyState27 (initial = 0) {
  const count = useState<number>('energy-state-27', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('energy-items-27', () => [])
  const grouped = computed(() => groupEnergy3(items.value))
  const label = computed(() => formatEnergy3(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
