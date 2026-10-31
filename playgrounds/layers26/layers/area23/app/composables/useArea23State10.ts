export function useArea23State10 (initial = 2) {
  const count = useState<number>('area23-state-10', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area23-items-10', () => [])
  const grouped = computed(() => groupArea2312(items.value))
  const label = computed(() => formatArea2312(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
