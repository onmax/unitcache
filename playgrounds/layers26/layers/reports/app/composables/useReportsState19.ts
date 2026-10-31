export function useReportsState19 (initial = 4) {
  const count = useState<number>('reports-state-19', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('reports-items-19', () => [])
  const grouped = computed(() => groupReports12(items.value))
  const label = computed(() => formatReports12(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
