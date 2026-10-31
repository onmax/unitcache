const count10 = ref(0)
const items10 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useKpisState10 (initial = 4) {
  const grouped = computed(() => groupKpis3(items10.value))
  const label = computed(() => formatKpis3(count10.value, { precision: 1 }))
  function bump (by = 1) { count10.value += by }
  function reset () { count10.value = initial; items10.value = [] }
  return { count: count10, items: items10, grouped, label, bump, reset }
}
