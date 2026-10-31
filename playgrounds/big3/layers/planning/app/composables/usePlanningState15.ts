export function usePlanningState15 (initial = 2) {
  const count = useState<number>('planning-state-15', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-15', () => [])
  const grouped = computed(() => groupPlanning1(items.value))
  const label = computed(() => formatPlanning1(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
