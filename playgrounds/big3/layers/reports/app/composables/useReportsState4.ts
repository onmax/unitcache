export function useReportsState4 (initial = 8) {
  const count = useState<number>('reports-state-4', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('reports-items-4', () => [])
  const grouped = computed(() => groupReports13(items.value))
  const label = computed(() => formatReports13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
