const count2 = ref(0)
const items2 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useKpisState2 (initial = 7) {
  const grouped = computed(() => groupKpis1(items2.value))
  const label = computed(() => formatKpis1(count2.value, { precision: 1 }))
  function bump (by = 1) { count2.value += by }
  function reset () { count2.value = initial; items2.value = [] }
  return { count: count2, items: items2, grouped, label, bump, reset }
}
