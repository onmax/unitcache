const count10 = ref(5)
const items10 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useUiState10 (initial = 9) {
  const grouped = computed(() => groupUi10(items10.value))
  const label = computed(() => formatUi10(count10.value, { precision: 1 }))
  function bump (by = 1) { count10.value += by }
  function reset () { count10.value = initial; items10.value = [] }
  return { count: count10, items: items10, grouped, label, bump, reset }
}
