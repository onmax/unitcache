export function useArea23State18 (initial = 0) {
  const count = useState<number>('area23-state-18', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area23-items-18', () => [])
  const grouped = computed(() => groupArea231(items.value))
  const label = computed(() => formatArea231(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
