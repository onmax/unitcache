const count8 = ref(9)
const items8 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useUiState8 (initial = 1) {
  const grouped = computed(() => groupUi10(items8.value))
  const label = computed(() => formatUi10(count8.value, { precision: 1 }))
  function bump (by = 1) { count8.value += by }
  function reset () { count8.value = initial; items8.value = [] }
  return { count: count8, items: items8, grouped, label, bump, reset }
}
