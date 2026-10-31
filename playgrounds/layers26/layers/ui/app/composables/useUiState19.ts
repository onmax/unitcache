export function useUiState19 (initial = 3) {
  const count = useState<number>('ui-state-19', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-19', () => [])
  const grouped = computed(() => groupUi0(items.value))
  const label = computed(() => formatUi0(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
