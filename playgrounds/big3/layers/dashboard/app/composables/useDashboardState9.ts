export function useDashboardState9 (initial = 3) {
  const count = useState<number>('dashboard-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('dashboard-items-9', () => [])
  const grouped = computed(() => groupDashboard13(items.value))
  const label = computed(() => formatDashboard13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
