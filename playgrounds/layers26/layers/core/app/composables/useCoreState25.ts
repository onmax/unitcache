export function useCoreState25 (initial = 8) {
  const count = useState<number>('core-state-25', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-25', () => [])
  const grouped = computed(() => groupCore9(items.value))
  const label = computed(() => formatCore9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
