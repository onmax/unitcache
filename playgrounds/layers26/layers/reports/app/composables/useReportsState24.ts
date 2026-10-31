export function useReportsState24 (initial = 6) {
  const count = useState<number>('reports-state-24', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('reports-items-24', () => [])
  const grouped = computed(() => groupReports10(items.value))
  const label = computed(() => formatReports10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
