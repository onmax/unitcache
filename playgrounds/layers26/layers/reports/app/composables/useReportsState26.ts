export function useReportsState26 (initial = 3) {
  const count = useState<number>('reports-state-26', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('reports-items-26', () => [])
  const grouped = computed(() => groupReports1(items.value))
  const label = computed(() => formatReports1(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
