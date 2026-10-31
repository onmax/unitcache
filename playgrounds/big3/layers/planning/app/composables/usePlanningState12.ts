export function usePlanningState12 (initial = 7) {
  const count = useState<number>('planning-state-12', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-12', () => [])
  const grouped = computed(() => groupPlanning10(items.value))
  const label = computed(() => formatPlanning10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
