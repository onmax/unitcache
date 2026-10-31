const count3 = ref(2)
const items3 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useUiState3 (initial = 0) {
  const grouped = computed(() => groupUi1(items3.value))
  const label = computed(() => formatUi1(count3.value, { precision: 1 }))
  function bump (by = 1) { count3.value += by }
  function reset () { count3.value = initial; items3.value = [] }
  return { count: count3, items: items3, grouped, label, bump, reset }
}
