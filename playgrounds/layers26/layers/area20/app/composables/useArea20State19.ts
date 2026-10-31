export function useArea20State19 (initial = 5) {
  const count = useState<number>('area20-state-19', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area20-items-19', () => [])
  const grouped = computed(() => groupArea207(items.value))
  const label = computed(() => formatArea207(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
