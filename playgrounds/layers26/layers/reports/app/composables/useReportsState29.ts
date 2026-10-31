export function useReportsState29 (initial = 1) {
  const count = useState<number>('reports-state-29', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('reports-items-29', () => [])
  const grouped = computed(() => groupReports6(items.value))
  const label = computed(() => formatReports6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
