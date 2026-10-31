export function useUiState8 (initial = 4) {
  const count = useState<number>('ui-state-8', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-8', () => [])
  const grouped = computed(() => groupUi5(items.value))
  const label = computed(() => formatUi5(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
