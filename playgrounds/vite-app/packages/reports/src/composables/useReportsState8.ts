const count8 = ref(5)
const items8 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useReportsState8 (initial = 4) {
  const grouped = computed(() => groupReports4(items8.value))
  const label = computed(() => formatReports4(count8.value, { precision: 1 }))
  function bump (by = 1) { count8.value += by }
  function reset () { count8.value = initial; items8.value = [] }
  return { count: count8, items: items8, grouped, label, bump, reset }
}
