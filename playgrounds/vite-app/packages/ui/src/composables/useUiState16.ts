const count16 = ref(8)
const items16 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useUiState16 (initial = 2) {
  const grouped = computed(() => groupUi9(items16.value))
  const label = computed(() => formatUi9(count16.value, { precision: 1 }))
  function bump (by = 1) { count16.value += by }
  function reset () { count16.value = initial; items16.value = [] }
  return { count: count16, items: items16, grouped, label, bump, reset }
}
