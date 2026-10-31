export function useArea20State17 (initial = 9) {
  const count = useState<number>('area20-state-17', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area20-items-17', () => [])
  const grouped = computed(() => groupArea2014(items.value))
  const label = computed(() => formatArea2014(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
