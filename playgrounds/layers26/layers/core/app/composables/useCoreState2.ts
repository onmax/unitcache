export function useCoreState2 (initial = 3) {
  const count = useState<number>('core-state-2', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-2', () => [])
  const grouped = computed(() => groupCore5(items.value))
  const label = computed(() => formatCore5(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
