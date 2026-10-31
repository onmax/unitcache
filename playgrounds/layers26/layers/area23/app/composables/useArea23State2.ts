export function useArea23State2 (initial = 2) {
  const count = useState<number>('area23-state-2', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area23-items-2', () => [])
  const grouped = computed(() => groupArea2314(items.value))
  const label = computed(() => formatArea2314(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
