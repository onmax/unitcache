export function useCoreState17 (initial = 3) {
  const count = useState<number>('core-state-17', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-17', () => [])
  const grouped = computed(() => groupCore4(items.value))
  const label = computed(() => formatCore4(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
