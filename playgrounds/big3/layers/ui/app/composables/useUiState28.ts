export function useUiState28 (initial = 5) {
  const count = useState<number>('ui-state-28', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-28', () => [])
  const grouped = computed(() => groupUi8(items.value))
  const label = computed(() => formatUi8(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
