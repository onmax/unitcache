export function usePlanningState29 (initial = 3) {
  const count = useState<number>('planning-state-29', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-29', () => [])
  const grouped = computed(() => groupPlanning15(items.value))
  const label = computed(() => formatPlanning15(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
