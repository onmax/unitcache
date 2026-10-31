export function usePlanningState18 (initial = 3) {
  const count = useState<number>('planning-state-18', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-18', () => [])
  const grouped = computed(() => groupPlanning12(items.value))
  const label = computed(() => formatPlanning12(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
