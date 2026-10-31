export function useArea23State22 (initial = 0) {
  const count = useState<number>('area23-state-22', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area23-items-22', () => [])
  const grouped = computed(() => groupArea234(items.value))
  const label = computed(() => formatArea234(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
