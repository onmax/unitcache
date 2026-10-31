const count13 = ref(3)
const items13 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useKpisState13 (initial = 8) {
  const grouped = computed(() => groupKpis1(items13.value))
  const label = computed(() => formatKpis1(count13.value, { precision: 1 }))
  function bump (by = 1) { count13.value += by }
  function reset () { count13.value = initial; items13.value = [] }
  return { count: count13, items: items13, grouped, label, bump, reset }
}
