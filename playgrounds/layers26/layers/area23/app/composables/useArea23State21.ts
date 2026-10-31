export function useArea23State21 (initial = 1) {
  const count = useState<number>('area23-state-21', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area23-items-21', () => [])
  const grouped = computed(() => groupArea2313(items.value))
  const label = computed(() => formatArea2313(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
