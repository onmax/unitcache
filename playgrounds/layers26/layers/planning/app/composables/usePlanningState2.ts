export function usePlanningState2 (initial = 3) {
  const count = useState<number>('planning-state-2', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-2', () => [])
  const grouped = computed(() => groupPlanning4(items.value))
  const label = computed(() => formatPlanning4(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
