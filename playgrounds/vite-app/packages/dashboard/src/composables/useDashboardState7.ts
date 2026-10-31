const count7 = ref(5)
const items7 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useDashboardState7 (initial = 7) {
  const grouped = computed(() => groupDashboard9(items7.value))
  const label = computed(() => formatDashboard9(count7.value, { precision: 1 }))
  function bump (by = 1) { count7.value += by }
  function reset () { count7.value = initial; items7.value = [] }
  return { count: count7, items: items7, grouped, label, bump, reset }
}
