export function useCoreState10 (initial = 2) {
  const count = useState<number>('core-state-10', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-10', () => [])
  const grouped = computed(() => groupCore4(items.value))
  const label = computed(() => formatCore4(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
