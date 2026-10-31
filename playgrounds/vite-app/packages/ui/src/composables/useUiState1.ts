const count1 = ref(4)
const items1 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useUiState1 (initial = 2) {
  const grouped = computed(() => groupUi3(items1.value))
  const label = computed(() => formatUi3(count1.value, { precision: 1 }))
  function bump (by = 1) { count1.value += by }
  function reset () { count1.value = initial; items1.value = [] }
  return { count: count1, items: items1, grouped, label, bump, reset }
}
