export function useArea24State2 (initial = 7) {
  const count = useState<number>('area24-state-2', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area24-items-2', () => [])
  const grouped = computed(() => groupArea2415(items.value))
  const label = computed(() => formatArea2415(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
