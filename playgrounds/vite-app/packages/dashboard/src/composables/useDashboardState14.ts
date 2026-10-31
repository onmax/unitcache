const count14 = ref(4)
const items14 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useDashboardState14 (initial = 5) {
  const grouped = computed(() => groupDashboard10(items14.value))
  const label = computed(() => formatDashboard10(count14.value, { precision: 1 }))
  function bump (by = 1) { count14.value += by }
  function reset () { count14.value = initial; items14.value = [] }
  return { count: count14, items: items14, grouped, label, bump, reset }
}
