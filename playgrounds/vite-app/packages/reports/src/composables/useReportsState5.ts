const count5 = ref(1)
const items5 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useReportsState5 (initial = 2) {
  const grouped = computed(() => groupReports4(items5.value))
  const label = computed(() => formatReports4(count5.value, { precision: 1 }))
  function bump (by = 1) { count5.value += by }
  function reset () { count5.value = initial; items5.value = [] }
  return { count: count5, items: items5, grouped, label, bump, reset }
}
