const count17 = ref(3)
const items17 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useUiState17 (initial = 8) {
  const grouped = computed(() => groupUi1(items17.value))
  const label = computed(() => formatUi1(count17.value, { precision: 1 }))
  function bump (by = 1) { count17.value += by }
  function reset () { count17.value = initial; items17.value = [] }
  return { count: count17, items: items17, grouped, label, bump, reset }
}
