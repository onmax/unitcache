export function useReportsState18 (initial = 1) {
  const count = useState<number>('reports-state-18', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('reports-items-18', () => [])
  const grouped = computed(() => groupReports7(items.value))
  const label = computed(() => formatReports7(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
