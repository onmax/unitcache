const count4 = ref(8)
const items4 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useUiState4 (initial = 2) {
  const grouped = computed(() => groupUi7(items4.value))
  const label = computed(() => formatUi7(count4.value, { precision: 1 }))
  function bump (by = 1) { count4.value += by }
  function reset () { count4.value = initial; items4.value = [] }
  return { count: count4, items: items4, grouped, label, bump, reset }
}
