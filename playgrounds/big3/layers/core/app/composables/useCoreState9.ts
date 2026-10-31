export function useCoreState9 (initial = 3) {
  const count = useState<number>('core-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-9', () => [])
  const grouped = computed(() => groupCore14(items.value))
  const label = computed(() => formatCore14(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
