export function usePlanningState16 (initial = 9) {
  const count = useState<number>('planning-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-16', () => [])
  const grouped = computed(() => groupPlanning13(items.value))
  const label = computed(() => formatPlanning13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
