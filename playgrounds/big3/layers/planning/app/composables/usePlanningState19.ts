export function usePlanningState19 (initial = 2) {
  const count = useState<number>('planning-state-19', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-19', () => [])
  const grouped = computed(() => groupPlanning10(items.value))
  const label = computed(() => formatPlanning10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
