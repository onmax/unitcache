export function useArea20State6 (initial = 3) {
  const count = useState<number>('area20-state-6', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area20-items-6', () => [])
  const grouped = computed(() => groupArea2013(items.value))
  const label = computed(() => formatArea2013(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
