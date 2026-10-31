export function usePlanningState20 (initial = 1) {
  const count = useState<number>('planning-state-20', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-20', () => [])
  const grouped = computed(() => groupPlanning0(items.value))
  const label = computed(() => formatPlanning0(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
