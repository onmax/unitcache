export function useDashboardState8 (initial = 2) {
  const count = useState<number>('dashboard-state-8', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('dashboard-items-8', () => [])
  const grouped = computed(() => groupDashboard13(items.value))
  const label = computed(() => formatDashboard13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
