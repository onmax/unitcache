export function useArea20State18 (initial = 2) {
  const count = useState<number>('area20-state-18', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area20-items-18', () => [])
  const grouped = computed(() => groupArea2012(items.value))
  const label = computed(() => formatArea2012(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
