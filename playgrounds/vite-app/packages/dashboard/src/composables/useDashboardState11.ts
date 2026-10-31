const count11 = ref(3)
const items11 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useDashboardState11 (initial = 8) {
  const grouped = computed(() => groupDashboard2(items11.value))
  const label = computed(() => formatDashboard2(count11.value, { precision: 1 }))
  function bump (by = 1) { count11.value += by }
  function reset () { count11.value = initial; items11.value = [] }
  return { count: count11, items: items11, grouped, label, bump, reset }
}
