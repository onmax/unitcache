export function useUiState18 (initial = 7) {
  const count = useState<number>('ui-state-18', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-18', () => [])
  const grouped = computed(() => groupUi12(items.value))
  const label = computed(() => formatUi12(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
