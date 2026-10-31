export function useUiState1 (initial = 7) {
  const count = useState<number>('ui-state-1', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-1', () => [])
  const grouped = computed(() => groupUi3(items.value))
  const label = computed(() => formatUi3(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
