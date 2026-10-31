export function useDashboardState13 (initial = 1) {
  const count = useState<number>('dashboard-state-13', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('dashboard-items-13', () => [])
  const grouped = computed(() => groupDashboard12(items.value))
  const label = computed(() => formatDashboard12(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
