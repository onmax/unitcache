export function useArea20State1 (initial = 7) {
  const count = useState<number>('area20-state-1', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area20-items-1', () => [])
  const grouped = computed(() => groupArea2011(items.value))
  const label = computed(() => formatArea2011(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
