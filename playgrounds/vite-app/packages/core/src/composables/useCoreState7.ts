const count7 = ref(2)
const items7 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useCoreState7 (initial = 0) {
  const grouped = computed(() => groupCore5(items7.value))
  const label = computed(() => formatCore5(count7.value, { precision: 1 }))
  function bump (by = 1) { count7.value += by }
  function reset () { count7.value = initial; items7.value = [] }
  return { count: count7, items: items7, grouped, label, bump, reset }
}
