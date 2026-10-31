const count3 = ref(7)
const items3 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useCoreState3 (initial = 8) {
  const grouped = computed(() => groupCore9(items3.value))
  const label = computed(() => formatCore9(count3.value, { precision: 1 }))
  function bump (by = 1) { count3.value += by }
  function reset () { count3.value = initial; items3.value = [] }
  return { count: count3, items: items3, grouped, label, bump, reset }
}
