const count13 = ref(9)
const items13 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useCoreState13 (initial = 1) {
  const grouped = computed(() => groupCore4(items13.value))
  const label = computed(() => formatCore4(count13.value, { precision: 1 }))
  function bump (by = 1) { count13.value += by }
  function reset () { count13.value = initial; items13.value = [] }
  return { count: count13, items: items13, grouped, label, bump, reset }
}
