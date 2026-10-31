export function useArea20State15 (initial = 1) {
  const count = useState<number>('area20-state-15', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area20-items-15', () => [])
  const grouped = computed(() => groupArea2015(items.value))
  const label = computed(() => formatArea2015(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
