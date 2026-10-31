export function usePlanningState29 (initial = 5) {
  const count = useState<number>('planning-state-29', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-29', () => [])
  const grouped = computed(() => groupPlanning5(items.value))
  const label = computed(() => formatPlanning5(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
