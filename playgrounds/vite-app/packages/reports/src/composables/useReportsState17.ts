const count17 = ref(6)
const items17 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useReportsState17 (initial = 2) {
  const grouped = computed(() => groupReports0(items17.value))
  const label = computed(() => formatReports0(count17.value, { precision: 1 }))
  function bump (by = 1) { count17.value += by }
  function reset () { count17.value = initial; items17.value = [] }
  return { count: count17, items: items17, grouped, label, bump, reset }
}
