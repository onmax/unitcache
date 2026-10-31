export function usePlanningState1 (initial = 8) {
  const count = useState<number>('planning-state-1', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-1', () => [])
  const grouped = computed(() => groupPlanning12(items.value))
  const label = computed(() => formatPlanning12(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
