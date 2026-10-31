export function useReportsState27 (initial = 1) {
  const count = useState<number>('reports-state-27', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('reports-items-27', () => [])
  const grouped = computed(() => groupReports3(items.value))
  const label = computed(() => formatReports3(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
