export function useReportsState12 (initial = 5) {
  const count = useState<number>('reports-state-12', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('reports-items-12', () => [])
  const grouped = computed(() => groupReports13(items.value))
  const label = computed(() => formatReports13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
