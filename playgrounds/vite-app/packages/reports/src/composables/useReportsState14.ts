const count14 = ref(3)
const items14 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useReportsState14 (initial = 7) {
  const grouped = computed(() => groupReports8(items14.value))
  const label = computed(() => formatReports8(count14.value, { precision: 1 }))
  function bump (by = 1) { count14.value += by }
  function reset () { count14.value = initial; items14.value = [] }
  return { count: count14, items: items14, grouped, label, bump, reset }
}
