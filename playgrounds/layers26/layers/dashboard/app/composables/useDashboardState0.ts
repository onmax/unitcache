export function useDashboardState0 (initial = 8) {
  const count = useState<number>('dashboard-state-0', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('dashboard-items-0', () => [])
  const grouped = computed(() => groupDashboard9(items.value))
  const label = computed(() => formatDashboard9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
