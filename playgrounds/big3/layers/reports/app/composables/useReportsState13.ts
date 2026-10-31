export function useReportsState13 (initial = 4) {
  const count = useState<number>('reports-state-13', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('reports-items-13', () => [])
  const grouped = computed(() => groupReports5(items.value))
  const label = computed(() => formatReports5(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
