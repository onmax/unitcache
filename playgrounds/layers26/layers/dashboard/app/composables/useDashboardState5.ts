export function useDashboardState5 (initial = 9) {
  const count = useState<number>('dashboard-state-5', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('dashboard-items-5', () => [])
  const grouped = computed(() => groupDashboard11(items.value))
  const label = computed(() => formatDashboard11(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
