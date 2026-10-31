export function useReportsState17 (initial = 9) {
  const count = useState<number>('reports-state-17', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('reports-items-17', () => [])
  const grouped = computed(() => groupReports2(items.value))
  const label = computed(() => formatReports2(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
