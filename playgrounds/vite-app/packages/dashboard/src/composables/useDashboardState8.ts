const count8 = ref(8)
const items8 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useDashboardState8 (initial = 1) {
  const grouped = computed(() => groupDashboard11(items8.value))
  const label = computed(() => formatDashboard11(count8.value, { precision: 1 }))
  function bump (by = 1) { count8.value += by }
  function reset () { count8.value = initial; items8.value = [] }
  return { count: count8, items: items8, grouped, label, bump, reset }
}
