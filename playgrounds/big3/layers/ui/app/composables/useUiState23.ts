export function useUiState23 (initial = 3) {
  const count = useState<number>('ui-state-23', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-23', () => [])
  const grouped = computed(() => groupUi8(items.value))
  const label = computed(() => formatUi8(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
