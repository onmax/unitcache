export function useUiState18 (initial = 0) {
  const count = useState<number>('ui-state-18', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-18', () => [])
  const grouped = computed(() => groupUi5(items.value))
  const label = computed(() => formatUi5(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
