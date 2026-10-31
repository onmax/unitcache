export function useUiState15 (initial = 2) {
  const count = useState<number>('ui-state-15', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-15', () => [])
  const grouped = computed(() => groupUi4(items.value))
  const label = computed(() => formatUi4(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
