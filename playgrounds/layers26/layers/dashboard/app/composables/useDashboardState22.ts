export function useDashboardState22 (initial = 5) {
  const count = useState<number>('dashboard-state-22', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('dashboard-items-22', () => [])
  const grouped = computed(() => groupDashboard10(items.value))
  const label = computed(() => formatDashboard10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
