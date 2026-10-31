export function useUiState9 (initial = 8) {
  const count = useState<number>('ui-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-9', () => [])
  const grouped = computed(() => groupUi13(items.value))
  const label = computed(() => formatUi13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
