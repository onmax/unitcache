export function useArea23State11 (initial = 9) {
  const count = useState<number>('area23-state-11', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area23-items-11', () => [])
  const grouped = computed(() => groupArea232(items.value))
  const label = computed(() => formatArea232(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
