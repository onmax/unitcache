export function useUiState10 (initial = 2) {
  const count = useState<number>('ui-state-10', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-10', () => [])
  const grouped = computed(() => groupUi1(items.value))
  const label = computed(() => formatUi1(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
