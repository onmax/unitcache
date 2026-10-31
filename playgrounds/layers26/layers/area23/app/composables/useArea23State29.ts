export function useArea23State29 (initial = 9) {
  const count = useState<number>('area23-state-29', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area23-items-29', () => [])
  const grouped = computed(() => groupArea2311(items.value))
  const label = computed(() => formatArea2311(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
