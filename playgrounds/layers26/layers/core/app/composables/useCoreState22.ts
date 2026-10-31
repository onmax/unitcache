export function useCoreState22 (initial = 5) {
  const count = useState<number>('core-state-22', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-22', () => [])
  const grouped = computed(() => groupCore1(items.value))
  const label = computed(() => formatCore1(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
