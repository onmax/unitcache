export function useDashboardState11 (initial = 5) {
  const count = useState<number>('dashboard-state-11', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('dashboard-items-11', () => [])
  const grouped = computed(() => groupDashboard7(items.value))
  const label = computed(() => formatDashboard7(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
