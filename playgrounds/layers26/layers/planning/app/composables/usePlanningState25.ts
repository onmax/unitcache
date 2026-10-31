export function usePlanningState25 (initial = 4) {
  const count = useState<number>('planning-state-25', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-25', () => [])
  const grouped = computed(() => groupPlanning14(items.value))
  const label = computed(() => formatPlanning14(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
