export function useCoreState6 (initial = 3) {
  const count = useState<number>('core-state-6', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-6', () => [])
  const grouped = computed(() => groupCore3(items.value))
  const label = computed(() => formatCore3(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
