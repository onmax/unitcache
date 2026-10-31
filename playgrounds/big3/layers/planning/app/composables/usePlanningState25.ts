export function usePlanningState25 (initial = 9) {
  const count = useState<number>('planning-state-25', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-25', () => [])
  const grouped = computed(() => groupPlanning3(items.value))
  const label = computed(() => formatPlanning3(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
