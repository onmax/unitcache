export function useReportsState7 (initial = 6) {
  const count = useState<number>('reports-state-7', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('reports-items-7', () => [])
  const grouped = computed(() => groupReports9(items.value))
  const label = computed(() => formatReports9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
