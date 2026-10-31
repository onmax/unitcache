export function useUiState6 (initial = 3) {
  const count = useState<number>('ui-state-6', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-6', () => [])
  const grouped = computed(() => groupUi5(items.value))
  const label = computed(() => formatUi5(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
