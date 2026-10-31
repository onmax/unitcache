export function useUiState7 (initial = 8) {
  const count = useState<number>('ui-state-7', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-7', () => [])
  const grouped = computed(() => groupUi14(items.value))
  const label = computed(() => formatUi14(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
