const count18 = ref(8)
const items18 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useCoreState18 (initial = 8) {
  const grouped = computed(() => groupCore4(items18.value))
  const label = computed(() => formatCore4(count18.value, { precision: 1 }))
  function bump (by = 1) { count18.value += by }
  function reset () { count18.value = initial; items18.value = [] }
  return { count: count18, items: items18, grouped, label, bump, reset }
}
