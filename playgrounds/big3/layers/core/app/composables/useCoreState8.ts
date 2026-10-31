export function useCoreState8 (initial = 3) {
  const count = useState<number>('core-state-8', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-8', () => [])
  const grouped = computed(() => groupCore9(items.value))
  const label = computed(() => formatCore9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
