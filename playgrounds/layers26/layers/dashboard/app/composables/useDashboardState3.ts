export function useDashboardState3 (initial = 6) {
  const count = useState<number>('dashboard-state-3', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('dashboard-items-3', () => [])
  const grouped = computed(() => groupDashboard4(items.value))
  const label = computed(() => formatDashboard4(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
