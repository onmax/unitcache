export function usePlanningState4 (initial = 6) {
  const count = useState<number>('planning-state-4', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-4', () => [])
  const grouped = computed(() => groupPlanning14(items.value))
  const label = computed(() => formatPlanning14(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
