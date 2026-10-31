export function usePlanningState24 (initial = 5) {
  const count = useState<number>('planning-state-24', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-24', () => [])
  const grouped = computed(() => groupPlanning7(items.value))
  const label = computed(() => formatPlanning7(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
