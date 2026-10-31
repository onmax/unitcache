export function usePlanningState23 (initial = 7) {
  const count = useState<number>('planning-state-23', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-23', () => [])
  const grouped = computed(() => groupPlanning6(items.value))
  const label = computed(() => formatPlanning6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
