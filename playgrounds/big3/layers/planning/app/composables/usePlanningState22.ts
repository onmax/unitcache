export function usePlanningState22 (initial = 3) {
  const count = useState<number>('planning-state-22', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-22', () => [])
  const grouped = computed(() => groupPlanning8(items.value))
  const label = computed(() => formatPlanning8(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
