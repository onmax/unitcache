export function useDashboardState16 (initial = 4) {
  const count = useState<number>('dashboard-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('dashboard-items-16', () => [])
  const grouped = computed(() => groupDashboard0(items.value))
  const label = computed(() => formatDashboard0(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
