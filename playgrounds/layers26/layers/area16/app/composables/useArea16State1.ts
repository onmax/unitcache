export function useArea16State1 (initial = 2) {
  const count = useState<number>('area16-state-1', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area16-items-1', () => [])
  const grouped = computed(() => groupArea163(items.value))
  const label = computed(() => formatArea163(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
