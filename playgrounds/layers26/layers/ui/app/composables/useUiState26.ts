export function useUiState26 (initial = 5) {
  const count = useState<number>('ui-state-26', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-26', () => [])
  const grouped = computed(() => groupUi11(items.value))
  const label = computed(() => formatUi11(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
