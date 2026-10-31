export function useArea20State2 (initial = 9) {
  const count = useState<number>('area20-state-2', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area20-items-2', () => [])
  const grouped = computed(() => groupArea208(items.value))
  const label = computed(() => formatArea208(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
