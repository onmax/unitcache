export function useCoreState20 (initial = 2) {
  const count = useState<number>('core-state-20', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-20', () => [])
  const grouped = computed(() => groupCore13(items.value))
  const label = computed(() => formatCore13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
