const count15 = ref(5)
const items15 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useUiState15 (initial = 0) {
  const grouped = computed(() => groupUi6(items15.value))
  const label = computed(() => formatUi6(count15.value, { precision: 1 }))
  function bump (by = 1) { count15.value += by }
  function reset () { count15.value = initial; items15.value = [] }
  return { count: count15, items: items15, grouped, label, bump, reset }
}
