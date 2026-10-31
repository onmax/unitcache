const count4 = ref(1)
const items4 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useCoreState4 (initial = 3) {
  const grouped = computed(() => groupCore4(items4.value))
  const label = computed(() => formatCore4(count4.value, { precision: 1 }))
  function bump (by = 1) { count4.value += by }
  function reset () { count4.value = initial; items4.value = [] }
  return { count: count4, items: items4, grouped, label, bump, reset }
}
