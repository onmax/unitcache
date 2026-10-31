export function usePlanningState3 (initial = 0) {
  const count = useState<number>('planning-state-3', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-3', () => [])
  const grouped = computed(() => groupPlanning1(items.value))
  const label = computed(() => formatPlanning1(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
