const count6 = ref(1)
const items6 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useReportsState6 (initial = 5) {
  const grouped = computed(() => groupReports6(items6.value))
  const label = computed(() => formatReports6(count6.value, { precision: 1 }))
  function bump (by = 1) { count6.value += by }
  function reset () { count6.value = initial; items6.value = [] }
  return { count: count6, items: items6, grouped, label, bump, reset }
}
