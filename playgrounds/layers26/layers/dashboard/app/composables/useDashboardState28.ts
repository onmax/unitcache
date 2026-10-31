export function useDashboardState28 (initial = 7) {
  const count = useState<number>('dashboard-state-28', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('dashboard-items-28', () => [])
  const grouped = computed(() => groupDashboard3(items.value))
  const label = computed(() => formatDashboard3(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
