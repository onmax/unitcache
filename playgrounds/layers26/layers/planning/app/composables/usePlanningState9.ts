export function usePlanningState9 (initial = 0) {
  const count = useState<number>('planning-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-9', () => [])
  const grouped = computed(() => groupPlanning14(items.value))
  const label = computed(() => formatPlanning14(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
