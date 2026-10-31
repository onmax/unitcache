export function useDashboardState7 (initial = 0) {
  const count = useState<number>('dashboard-state-7', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('dashboard-items-7', () => [])
  const grouped = computed(() => groupDashboard12(items.value))
  const label = computed(() => formatDashboard12(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
