export function useUiState11 (initial = 3) {
  const count = useState<number>('ui-state-11', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-11', () => [])
  const grouped = computed(() => groupUi9(items.value))
  const label = computed(() => formatUi9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
