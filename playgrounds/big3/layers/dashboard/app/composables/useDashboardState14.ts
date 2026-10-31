export function useDashboardState14 (initial = 6) {
  const count = useState<number>('dashboard-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('dashboard-items-14', () => [])
  const grouped = computed(() => groupDashboard15(items.value))
  const label = computed(() => formatDashboard15(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
