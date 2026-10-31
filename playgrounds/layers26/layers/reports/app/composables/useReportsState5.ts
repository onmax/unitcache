export function useReportsState5 (initial = 5) {
  const count = useState<number>('reports-state-5', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('reports-items-5', () => [])
  const grouped = computed(() => groupReports6(items.value))
  const label = computed(() => formatReports6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
