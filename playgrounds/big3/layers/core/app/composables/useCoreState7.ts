export function useCoreState7 (initial = 4) {
  const count = useState<number>('core-state-7', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-7', () => [])
  const grouped = computed(() => groupCore15(items.value))
  const label = computed(() => formatCore15(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
