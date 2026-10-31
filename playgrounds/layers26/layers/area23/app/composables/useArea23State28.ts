export function useArea23State28 (initial = 7) {
  const count = useState<number>('area23-state-28', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area23-items-28', () => [])
  const grouped = computed(() => groupArea2310(items.value))
  const label = computed(() => formatArea2310(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
