export function useUiState14 (initial = 0) {
  const count = useState<number>('ui-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-14', () => [])
  const grouped = computed(() => groupUi2(items.value))
  const label = computed(() => formatUi2(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
