export function useCoreState23 (initial = 7) {
  const count = useState<number>('core-state-23', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-23', () => [])
  const grouped = computed(() => groupCore5(items.value))
  const label = computed(() => formatCore5(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
