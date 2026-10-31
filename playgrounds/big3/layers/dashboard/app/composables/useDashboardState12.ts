export function useDashboardState12 (initial = 3) {
  const count = useState<number>('dashboard-state-12', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('dashboard-items-12', () => [])
  const grouped = computed(() => groupDashboard9(items.value))
  const label = computed(() => formatDashboard9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
