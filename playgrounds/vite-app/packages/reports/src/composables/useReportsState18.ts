const count18 = ref(9)
const items18 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useReportsState18 (initial = 0) {
  const grouped = computed(() => groupReports2(items18.value))
  const label = computed(() => formatReports2(count18.value, { precision: 1 }))
  function bump (by = 1) { count18.value += by }
  function reset () { count18.value = initial; items18.value = [] }
  return { count: count18, items: items18, grouped, label, bump, reset }
}
