export function useArea23State27 (initial = 8) {
  const count = useState<number>('area23-state-27', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area23-items-27', () => [])
  const grouped = computed(() => groupArea2315(items.value))
  const label = computed(() => formatArea2315(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
