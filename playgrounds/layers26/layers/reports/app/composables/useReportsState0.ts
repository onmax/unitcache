export function useReportsState0 (initial = 3) {
  const count = useState<number>('reports-state-0', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('reports-items-0', () => [])
  const grouped = computed(() => groupReports15(items.value))
  const label = computed(() => formatReports15(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
