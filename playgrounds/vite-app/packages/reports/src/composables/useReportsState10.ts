const count10 = ref(2)
const items10 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useReportsState10 (initial = 7) {
  const grouped = computed(() => groupReports8(items10.value))
  const label = computed(() => formatReports8(count10.value, { precision: 1 }))
  function bump (by = 1) { count10.value += by }
  function reset () { count10.value = initial; items10.value = [] }
  return { count: count10, items: items10, grouped, label, bump, reset }
}
