const count19 = ref(3)
const items19 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useUiState19 (initial = 1) {
  const grouped = computed(() => groupUi6(items19.value))
  const label = computed(() => formatUi6(count19.value, { precision: 1 }))
  function bump (by = 1) { count19.value += by }
  function reset () { count19.value = initial; items19.value = [] }
  return { count: count19, items: items19, grouped, label, bump, reset }
}
