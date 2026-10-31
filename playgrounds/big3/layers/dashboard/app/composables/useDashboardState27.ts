export function useDashboardState27 (initial = 0) {
  const count = useState<number>('dashboard-state-27', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('dashboard-items-27', () => [])
  const grouped = computed(() => groupDashboard14(items.value))
  const label = computed(() => formatDashboard14(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
