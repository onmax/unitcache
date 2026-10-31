export function usePlanningState0 (initial = 9) {
  const count = useState<number>('planning-state-0', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('planning-items-0', () => [])
  const grouped = computed(() => groupPlanning5(items.value))
  const label = computed(() => formatPlanning5(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
