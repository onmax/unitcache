export function useCoreState4 (initial = 4) {
  const count = useState<number>('core-state-4', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-4', () => [])
  const grouped = computed(() => groupCore2(items.value))
  const label = computed(() => formatCore2(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
