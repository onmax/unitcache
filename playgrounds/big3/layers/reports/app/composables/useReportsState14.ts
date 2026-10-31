export function useReportsState14 (initial = 7) {
  const count = useState<number>('reports-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('reports-items-14', () => [])
  const grouped = computed(() => groupReports12(items.value))
  const label = computed(() => formatReports12(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
