export function useCoreState12 (initial = 1) {
  const count = useState<number>('core-state-12', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-12', () => [])
  const grouped = computed(() => groupCore12(items.value))
  const label = computed(() => formatCore12(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
