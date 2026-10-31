const count6 = ref(6)
const items6 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useUiState6 (initial = 9) {
  const grouped = computed(() => groupUi3(items6.value))
  const label = computed(() => formatUi3(count6.value, { precision: 1 }))
  function bump (by = 1) { count6.value += by }
  function reset () { count6.value = initial; items6.value = [] }
  return { count: count6, items: items6, grouped, label, bump, reset }
}
