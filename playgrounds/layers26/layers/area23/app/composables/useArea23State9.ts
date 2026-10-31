export function useArea23State9 (initial = 2) {
  const count = useState<number>('area23-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area23-items-9', () => [])
  const grouped = computed(() => groupArea233(items.value))
  const label = computed(() => formatArea233(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
