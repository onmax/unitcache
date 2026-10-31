export function useDashboardState23 (initial = 9) {
  const count = useState<number>('dashboard-state-23', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('dashboard-items-23', () => [])
  const grouped = computed(() => groupDashboard10(items.value))
  const label = computed(() => formatDashboard10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
