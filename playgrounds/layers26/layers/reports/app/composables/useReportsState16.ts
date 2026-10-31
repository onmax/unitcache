export function useReportsState16 (initial = 8) {
  const count = useState<number>('reports-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('reports-items-16', () => [])
  const grouped = computed(() => groupReports11(items.value))
  const label = computed(() => formatReports11(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
