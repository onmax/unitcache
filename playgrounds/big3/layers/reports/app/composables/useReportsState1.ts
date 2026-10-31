export function useReportsState1 (initial = 3) {
  const count = useState<number>('reports-state-1', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('reports-items-1', () => [])
  const grouped = computed(() => groupReports11(items.value))
  const label = computed(() => formatReports11(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
