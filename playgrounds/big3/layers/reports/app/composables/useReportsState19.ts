export function useReportsState19 (initial = 1) {
  const count = useState<number>('reports-state-19', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('reports-items-19', () => [])
  const grouped = computed(() => groupReports15(items.value))
  const label = computed(() => formatReports15(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
