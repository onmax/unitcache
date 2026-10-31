export function useArea20State23 (initial = 1) {
  const count = useState<number>('area20-state-23', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area20-items-23', () => [])
  const grouped = computed(() => groupArea2010(items.value))
  const label = computed(() => formatArea2010(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
