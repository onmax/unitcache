export function useArea23State3 (initial = 5) {
  const count = useState<number>('area23-state-3', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area23-items-3', () => [])
  const grouped = computed(() => groupArea239(items.value))
  const label = computed(() => formatArea239(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
