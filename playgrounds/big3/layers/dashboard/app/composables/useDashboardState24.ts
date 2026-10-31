export function useDashboardState24 (initial = 5) {
  const count = useState<number>('dashboard-state-24', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('dashboard-items-24', () => [])
  const grouped = computed(() => groupDashboard6(items.value))
  const label = computed(() => formatDashboard6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
