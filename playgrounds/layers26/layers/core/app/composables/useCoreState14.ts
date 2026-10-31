export function useCoreState14 (initial = 8) {
  const count = useState<number>('core-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-14', () => [])
  const grouped = computed(() => groupCore7(items.value))
  const label = computed(() => formatCore7(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
