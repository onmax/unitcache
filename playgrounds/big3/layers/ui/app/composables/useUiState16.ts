export function useUiState16 (initial = 0) {
  const count = useState<number>('ui-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('ui-items-16', () => [])
  const grouped = computed(() => groupUi0(items.value))
  const label = computed(() => formatUi0(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
