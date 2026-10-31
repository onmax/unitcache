export function useUiState29 (initial = 7) {
  const count = useState<number>('ui-state-29', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-29', () => [])
  const grouped = computed(() => groupUi13(items.value))
  const label = computed(() => formatUi13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
