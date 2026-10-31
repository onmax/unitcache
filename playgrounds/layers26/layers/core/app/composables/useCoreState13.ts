export function useCoreState13 (initial = 2) {
  const count = useState<number>('core-state-13', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-13', () => [])
  const grouped = computed(() => groupCore10(items.value))
  const label = computed(() => formatCore10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
