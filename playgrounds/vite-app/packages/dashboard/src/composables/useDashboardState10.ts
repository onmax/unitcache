const count10 = ref(6)
const items10 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useDashboardState10 (initial = 6) {
  const grouped = computed(() => groupDashboard1(items10.value))
  const label = computed(() => formatDashboard1(count10.value, { precision: 1 }))
  function bump (by = 1) { count10.value += by }
  function reset () { count10.value = initial; items10.value = [] }
  return { count: count10, items: items10, grouped, label, bump, reset }
}
