export function useUiState2 (initial = 0) {
  const count = useState<number>('ui-state-2', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-2', () => [])
  const grouped = computed(() => groupUi7(items.value))
  const label = computed(() => formatUi7(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
