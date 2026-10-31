export function useArea15State18 (initial = 7) {
  const count = useState<number>('area15-state-18', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area15-items-18', () => [])
  const grouped = computed(() => groupArea159(items.value))
  const label = computed(() => formatArea159(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
