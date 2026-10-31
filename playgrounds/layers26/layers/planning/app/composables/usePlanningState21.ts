export function usePlanningState21 (initial = 1) {
  const count = useState<number>('planning-state-21', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-21', () => [])
  const grouped = computed(() => groupPlanning0(items.value))
  const label = computed(() => formatPlanning0(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
