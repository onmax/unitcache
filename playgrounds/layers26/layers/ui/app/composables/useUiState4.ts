export function useUiState4 (initial = 1) {
  const count = useState<number>('ui-state-4', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-4', () => [])
  const grouped = computed(() => groupUi10(items.value))
  const label = computed(() => formatUi10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
