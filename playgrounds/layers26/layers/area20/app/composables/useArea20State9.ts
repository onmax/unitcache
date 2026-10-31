export function useArea20State9 (initial = 1) {
  const count = useState<number>('area20-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area20-items-9', () => [])
  const grouped = computed(() => groupArea201(items.value))
  const label = computed(() => formatArea201(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
