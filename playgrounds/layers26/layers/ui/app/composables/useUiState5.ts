export function useUiState5 (initial = 9) {
  const count = useState<number>('ui-state-5', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-5', () => [])
  const grouped = computed(() => groupUi6(items.value))
  const label = computed(() => formatUi6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
