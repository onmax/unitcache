const count16 = ref(0)
const items16 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useDashboardState16 (initial = 2) {
  const grouped = computed(() => groupDashboard11(items16.value))
  const label = computed(() => formatDashboard11(count16.value, { precision: 1 }))
  function bump (by = 1) { count16.value += by }
  function reset () { count16.value = initial; items16.value = [] }
  return { count: count16, items: items16, grouped, label, bump, reset }
}
