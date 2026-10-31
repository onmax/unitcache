export function useDashboardState25 (initial = 6) {
  const count = useState<number>('dashboard-state-25', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('dashboard-items-25', () => [])
  const grouped = computed(() => groupDashboard2(items.value))
  const label = computed(() => formatDashboard2(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
