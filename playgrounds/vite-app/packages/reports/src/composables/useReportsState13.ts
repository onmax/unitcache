const count13 = ref(1)
const items13 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useReportsState13 (initial = 9) {
  const grouped = computed(() => groupReports6(items13.value))
  const label = computed(() => formatReports6(count13.value, { precision: 1 }))
  function bump (by = 1) { count13.value += by }
  function reset () { count13.value = initial; items13.value = [] }
  return { count: count13, items: items13, grouped, label, bump, reset }
}
